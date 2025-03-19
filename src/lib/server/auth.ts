import { prisma } from '$lib/db/prisma/client';
import * as bcrypt from 'bcryptjs';
import crypto from 'crypto';

// Helper function to generate a secure random token
function generateToken(length = 32): string {
  return crypto.randomBytes(length).toString('hex');
}

// Helper function to generate a unique referral code
async function generateReferralCode(length = 8): Promise<string> {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // Removed confusing characters like 0, O, 1, I
  let code = '';
  
  // Generate a random code
  for (let i = 0; i < length; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  
  // Check if code already exists
  const existingUser = await prisma.user.findUnique({
    where: { referralCode: code }
  });
  
  // If code exists, generate a new one recursively
  if (existingUser) {
    return generateReferralCode(length);
  }
  
  return code;
}

// Login with email and password
export async function loginWithPassword(email: string, password: string) {
  try {
    // Find user by email
    const user = await prisma.user.findUnique({
      where: { email: email.toLowerCase() }
    });
    
    // If user not found or password doesn't match
    if (!user || !user.passwordHash || !await bcrypt.compare(password, user.passwordHash)) {
      return {
        success: false,
        error: 'Invalid email or password'
      };
    }
    
    // Return user data
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
    console.error('Login error:', error);
    return {
      success: false,
      error: 'An error occurred during login'
    };
  }
}

// Magic link tokens storage (in-memory for development)
// In production, this should be stored in a database
const magicLinkTokens = new Map<string, { email: string, expires: Date }>();

// Send magic link to user's email
export async function sendMagicLink(email: string) {
  try {
    // Find user by email
    const user = await prisma.user.findUnique({
      where: { email: email.toLowerCase() }
    });
    
    // If user not found, return error
    if (!user) {
      return {
        success: false,
        error: 'No account found with this email'
      };
    }
    
    // Generate token
    const token = generateToken();
    
    // Set token expiration (15 minutes)
    const expires = new Date();
    expires.setMinutes(expires.getMinutes() + 15);
    
    // Store token
    magicLinkTokens.set(token, { email: user.email, expires });
    
    // In a real app, send email with magic link
    // For development, return the link
    const magicLink = `/api/auth/verify?token=${token}`;
    
    return {
      success: true,
      message: 'Magic link sent to your email',
      // Only include this in development mode
      devLink: magicLink
    };
  } catch (error) {
    console.error('Magic link error:', error);
    return {
      success: false,
      error: 'An error occurred while sending magic link'
    };
  }
}

// Verify magic link token
export async function verifyMagicLink(token: string) {
  try {
    // Get token data
    const tokenData = magicLinkTokens.get(token);
    
    // If token not found or expired
    if (!tokenData || tokenData.expires < new Date()) {
      return {
        success: false,
        error: 'Invalid or expired token'
      };
    }
    
    // Find user by email
    const user = await prisma.user.findUnique({
      where: { email: tokenData.email }
    });
    
    // If user not found
    if (!user) {
      return {
        success: false,
        error: 'User not found'
      };
    }
    
    // Delete token
    magicLinkTokens.delete(token);
    
    // Generate temporary token for client
    const temporaryToken = generateToken();
    
    // Return user data
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
    console.error('Verification error:', error);
    return {
      success: false,
      error: 'An error occurred during verification'
    };
  }
}

// Register new user
export async function registerUser(userData: {
  email: string;
  password: string;
  fullName: string;
  phone: string;
  region: string;
  sponsorId?: string | null;
}) {
  try {
    const { email, password, fullName, phone, region, sponsorId } = userData;
    
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: email.toLowerCase() }
    });
    
    if (existingUser) {
      return {
        success: false,
        error: 'Email already registered'
      };
    }
    
    // Hash password
    const passwordHash = await bcrypt.hash(password, 10);
    
    // Generate referral code
    const referralCode = await generateReferralCode();
    
    // Create user
    const user = await prisma.user.create({
      data: {
        email: email.toLowerCase(),
        passwordHash,
        fullName,
        phone,
        region,
        sponsorId,
        referralCode,
        role: 'CUSTOMER', // Default role from UserRole enum
        status: 'PENDING' // Default status from UserStatus enum
      }
    });
    
    // Return user data
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
    console.error('Registration error:', error);
    return {
      success: false,
      error: 'An error occurred during registration'
    };
  }
}

// Get user by referral code
export async function getUserByReferralCode(referralCode: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { referralCode }
    });
    
    return user;
  } catch (error) {
    console.error('Get user by referral code error:', error);
    return null;
  }
}
