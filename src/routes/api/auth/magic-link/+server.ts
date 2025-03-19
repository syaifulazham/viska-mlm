import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { sendMagicLink } from '$lib/server/auth';

export const POST: RequestHandler = async ({ request }) => {
  try {
    const { email } = await request.json();
    
    if (!email) {
      return json({ success: false, error: 'Email is required' }, { status: 400 });
    }
    
    const result = await sendMagicLink(email);
    
    if (!result.success) {
      return json({ success: false, error: result.error }, { status: 400 });
    }
    
    return json({ 
      success: true, 
      message: result.message,
      // Only include this in development mode
      devLink: result.devLink 
    });
  } catch (error) {
    console.error('Magic link error:', error);
    return json({ success: false, error: 'An unexpected error occurred' }, { status: 500 });
  }
};
