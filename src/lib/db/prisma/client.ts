import { PrismaClient } from '@prisma/client';

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
// Learn more: https://pris.ly/d/help/next-js-best-practices

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

// Helper function to get the user's region from their profile
export async function getUserRegion(userId: string): Promise<string | null> {
  if (!userId) return null;
  
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { region: true }
  });
    
  return user?.region || 'my'; // Default to Malaysia if no region is set
}

// Helper function to get the current user
export async function getCurrentUser(userId: string): Promise<any> {
  if (!userId) return null;
  
  const user = await prisma.user.findUnique({
    where: { id: userId }
  });
    
  return user;
}

// Helper function to get user's downline
export async function getUserDownline(userId: string): Promise<any[]> {
  const downline = await prisma.user.findMany({
    where: { sponsorId: userId }
  });
    
  return downline || [];
}

// Helper function to get user's sales
export async function getUserSales(userId: string): Promise<any[]> {
  const sales = await prisma.sale.findMany({
    where: { userId: userId }
  });
    
  return sales || [];
}

// Helper function to get user's commissions
export async function getUserCommissions(userId: string): Promise<any[]> {
  const commissions = await prisma.commission.findMany({
    where: { userId: userId }
  });
    
  return commissions || [];
}

// Helper function to calculate user's total sales
export async function getUserTotalSales(userId: string): Promise<number> {
  const sales = await prisma.sale.findMany({
    where: { userId: userId },
    select: { amount: true }
  });
    
  return sales.reduce((total: number, sale: { amount: any }) => total + Number(sale.amount), 0) || 0;
}

// Helper function to calculate user's group sales
export async function getUserGroupSales(userId: string): Promise<number> {
  // Get all direct downlines
  const downline = await prisma.user.findMany({
    where: { sponsorId: userId },
    select: { id: true }
  });
    
  if (!downline || downline.length === 0) return 0;
  
  // Get all sales from downlines
  const downlineIds = downline.map((d: { id: string }) => d.id);
  const sales = await prisma.sale.findMany({
    where: { userId: { in: downlineIds } },
    select: { amount: true }
  });
    
  return sales.reduce((total: number, sale: { amount: any }) => total + Number(sale.amount), 0) || 0;
}
