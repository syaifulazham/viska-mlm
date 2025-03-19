import { createClient } from '@supabase/supabase-js';
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';
import type { Database } from './types';

export const supabase = createClient<Database>(
  PUBLIC_SUPABASE_URL,
  PUBLIC_SUPABASE_ANON_KEY
);

// Helper function to get the user's region from their profile
export async function getUserRegion() {
  const { data: { session } } = await supabase.auth.getSession();
  
  if (!session) return null;
  
  const { data: profile } = await supabase
    .from('profiles')
    .select('region')
    .eq('id', session.user.id)
    .single();
    
  return profile?.region || 'my'; // Default to Malaysia if no region is set
}

// Helper function to get the current user
export async function getCurrentUser() {
  const { data: { session } } = await supabase.auth.getSession();
  
  if (!session) return null;
  
  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', session.user.id)
    .single();
    
  return {
    ...session.user,
    profile
  };
}

// Helper function to get user's downline
export async function getUserDownline(userId: string) {
  const { data: downline } = await supabase
    .from('profiles')
    .select('*')
    .eq('sponsor_id', userId);
    
  return downline || [];
}

// Helper function to get user's sales
export async function getUserSales(userId: string) {
  const { data: sales } = await supabase
    .from('sales')
    .select('*')
    .eq('user_id', userId);
    
  return sales || [];
}

// Helper function to get user's commissions
export async function getUserCommissions(userId: string) {
  const { data: commissions } = await supabase
    .from('commissions')
    .select('*')
    .eq('user_id', userId);
    
  return commissions || [];
}

// Helper function to calculate user's total sales
export async function getUserTotalSales(userId: string) {
  const { data: sales } = await supabase
    .from('sales')
    .select('amount')
    .eq('user_id', userId);
    
  return sales?.reduce((total, sale) => total + sale.amount, 0) || 0;
}

// Helper function to calculate user's group sales
export async function getUserGroupSales(userId: string) {
  // Get all direct downlines
  const { data: downline } = await supabase
    .from('profiles')
    .select('id')
    .eq('sponsor_id', userId);
    
  if (!downline || downline.length === 0) return 0;
  
  // Get all sales from downlines
  const downlineIds = downline.map(d => d.id);
  const { data: sales } = await supabase
    .from('sales')
    .select('amount')
    .in('user_id', downlineIds);
    
  return sales?.reduce((total, sale) => total + sale.amount, 0) || 0;
}
