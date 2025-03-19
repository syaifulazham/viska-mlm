import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { registerUser, getUserByReferralCode } from '$lib/server/auth';

export const POST: RequestHandler = async ({ request }) => {
  try {
    const { email, password, fullName, phone, region, referralCode } = await request.json();
    
    // Validate required fields
    if (!email || !password || !fullName || !phone || !region) {
      return json({ 
        success: false, 
        error: 'All fields are required' 
      }, { status: 400 });
    }
    
    // Check if referral code is valid and get sponsor ID
    let sponsorId = null;
    if (referralCode) {
      const sponsor = await getUserByReferralCode(referralCode);
      if (!sponsor) {
        return json({ 
          success: false, 
          error: 'Invalid referral code' 
        }, { status: 400 });
      }
      sponsorId = sponsor.id;
    }
    
    // Register the user
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
    
    // Return success with user data
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
    console.error('Registration error:', error);
    return json({ 
      success: false, 
      error: 'An unexpected error occurred' 
    }, { status: 500 });
  }
};
