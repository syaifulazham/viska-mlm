import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';
import { verifyMagicLink } from '$lib/server/auth';

export const GET: RequestHandler = async ({ url }) => {
  try {
    const token = url.searchParams.get('token');
    
    if (!token) {
      return json({ success: false, error: 'Token is required' }, { status: 400 });
    }
    
    const result = await verifyMagicLink(token);
    
    if (!result.success) {
      return json({ success: false, error: result.error }, { status: 401 });
    }
    
    // In a real app, you would set a session cookie here
    // For now, we'll redirect to the dashboard with a temporary token
    // that the client can use to fetch the user data
    
    // Redirect to dashboard
    return new Response(null, {
      status: 302,
      headers: {
        Location: `/my/dashboard?auth=${result.temporaryToken}`
      }
    });
  } catch (error) {
    console.error('Verification error:', error);
    return json({ success: false, error: 'An unexpected error occurred' }, { status: 500 });
  }
};
