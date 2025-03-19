import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcryptjs";
import crypto from "crypto";
const globalForPrisma = global;
const prisma = globalForPrisma.prisma || new PrismaClient({
  log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"]
});
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
function generateToken(length = 32) {
  return crypto.randomBytes(length).toString("hex");
}
async function generateReferralCode(length = 8) {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < length; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  const existingUser = await prisma.user.findUnique({
    where: { referralCode: code }
  });
  if (existingUser) {
    return generateReferralCode(length);
  }
  return code;
}
async function loginWithPassword(email, password) {
  try {
    const user = await prisma.user.findUnique({
      where: { email: email.toLowerCase() }
    });
    if (!user || !user.passwordHash || !await bcrypt.compare(password, user.passwordHash)) {
      return {
        success: false,
        error: "Invalid email or password"
      };
    }
    return {
      success: true,
      user: {
        id: user.id,
        email: user.email,
        fullName: user.fullName,
        role: user.role,
        region: user.region
      }
    };
  } catch (error) {
    console.error("Login error:", error);
    return {
      success: false,
      error: "An error occurred during login"
    };
  }
}
const magicLinkTokens = /* @__PURE__ */ new Map();
async function sendMagicLink(email) {
  try {
    const user = await prisma.user.findUnique({
      where: { email: email.toLowerCase() }
    });
    if (!user) {
      return {
        success: false,
        error: "No account found with this email"
      };
    }
    const token = generateToken();
    const expires = /* @__PURE__ */ new Date();
    expires.setMinutes(expires.getMinutes() + 15);
    magicLinkTokens.set(token, { email: user.email, expires });
    const magicLink = `/api/auth/verify?token=${token}`;
    return {
      success: true,
      message: "Magic link sent to your email",
      // Only include this in development mode
      devLink: magicLink
    };
  } catch (error) {
    console.error("Magic link error:", error);
    return {
      success: false,
      error: "An error occurred while sending magic link"
    };
  }
}
async function verifyMagicLink(token) {
  try {
    const tokenData = magicLinkTokens.get(token);
    if (!tokenData || tokenData.expires < /* @__PURE__ */ new Date()) {
      return {
        success: false,
        error: "Invalid or expired token"
      };
    }
    const user = await prisma.user.findUnique({
      where: { email: tokenData.email }
    });
    if (!user) {
      return {
        success: false,
        error: "User not found"
      };
    }
    magicLinkTokens.delete(token);
    const temporaryToken = generateToken();
    return {
      success: true,
      temporaryToken,
      user: {
        id: user.id,
        email: user.email,
        fullName: user.fullName,
        role: user.role,
        region: user.region
      }
    };
  } catch (error) {
    console.error("Verification error:", error);
    return {
      success: false,
      error: "An error occurred during verification"
    };
  }
}
async function registerUser(userData) {
  try {
    const { email, password, fullName, phone, region, sponsorId } = userData;
    const existingUser = await prisma.user.findUnique({
      where: { email: email.toLowerCase() }
    });
    if (existingUser) {
      return {
        success: false,
        error: "Email already registered"
      };
    }
    const passwordHash = await bcrypt.hash(password, 10);
    const referralCode = await generateReferralCode();
    const user = await prisma.user.create({
      data: {
        email: email.toLowerCase(),
        passwordHash,
        fullName,
        phone,
        region,
        sponsorId,
        referralCode,
        role: "CUSTOMER",
        // Default role from UserRole enum
        status: "PENDING"
        // Default status from UserStatus enum
      }
    });
    return {
      success: true,
      user: {
        id: user.id,
        email: user.email,
        fullName: user.fullName,
        role: user.role,
        region: user.region,
        referralCode: user.referralCode
      }
    };
  } catch (error) {
    console.error("Registration error:", error);
    return {
      success: false,
      error: "An error occurred during registration"
    };
  }
}
async function getUserByReferralCode(referralCode) {
  try {
    const user = await prisma.user.findUnique({
      where: { referralCode }
    });
    return user;
  } catch (error) {
    console.error("Get user by referral code error:", error);
    return null;
  }
}
export {
  getUserByReferralCode as g,
  loginWithPassword as l,
  registerUser as r,
  sendMagicLink as s,
  verifyMagicLink as v
};
