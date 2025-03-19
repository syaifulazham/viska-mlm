import { j as json } from "../../../../../chunks/index.js";
import { g as getUserByReferralCode, r as registerUser } from "../../../../../chunks/auth.js";
const POST = async ({ request }) => {
  try {
    const { email, password, fullName, phone, region, referralCode } = await request.json();
    if (!email || !password || !fullName || !phone || !region) {
      return json({
        success: false,
        error: "All fields are required"
      }, { status: 400 });
    }
    let sponsorId = null;
    if (referralCode) {
      const sponsor = await getUserByReferralCode(referralCode);
      if (!sponsor) {
        return json({
          success: false,
          error: "Invalid referral code"
        }, { status: 400 });
      }
      sponsorId = sponsor.id;
    }
    const result = await registerUser({
      email,
      password,
      fullName,
      phone,
      region,
      sponsorId
    });
    if (!result.success) {
      return json({
        success: false,
        error: result.error
      }, { status: 400 });
    }
    return json({
      success: true,
      user: {
        id: result.user?.id,
        email: result.user?.email,
        fullName: result.user?.fullName,
        role: result.user?.role,
        region: result.user?.region,
        referralCode: result.user?.referralCode
      }
    });
  } catch (error) {
    console.error("Registration error:", error);
    return json({
      success: false,
      error: "An unexpected error occurred"
    }, { status: 500 });
  }
};
export {
  POST
};
