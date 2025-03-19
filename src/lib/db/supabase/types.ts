export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          full_name: string
          email: string
          phone: string
          region: string
          role: string
          sponsor_id: string | null
          agent_code: string | null
          status: string
          avatar_url: string | null
          kyc_verified: boolean
          referral_code: string
        }
        Insert: {
          id: string
          created_at?: string
          updated_at?: string
          full_name: string
          email: string
          phone: string
          region: string
          role?: string
          sponsor_id?: string | null
          agent_code?: string | null
          status?: string
          avatar_url?: string | null
          kyc_verified?: boolean
          referral_code?: string
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          full_name?: string
          email?: string
          phone?: string
          region?: string
          role?: string
          sponsor_id?: string | null
          agent_code?: string | null
          status?: string
          avatar_url?: string | null
          kyc_verified?: boolean
          referral_code?: string
        }
      }
      products: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          name: string
          description: string
          price: number
          stock_quantity: number
          image_url: string | null
          category: string
          status: string
          region: string
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          name: string
          description: string
          price: number
          stock_quantity: number
          image_url?: string | null
          category: string
          status?: string
          region: string
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          name?: string
          description?: string
          price?: number
          stock_quantity?: number
          image_url?: string | null
          category?: string
          status?: string
          region?: string
        }
      }
      sales: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          user_id: string
          product_id: string
          quantity: number
          amount: number
          customer_name: string | null
          customer_email: string | null
          customer_phone: string | null
          status: string
          payment_method: string
          payment_status: string
          region: string
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          user_id: string
          product_id: string
          quantity: number
          amount: number
          customer_name?: string | null
          customer_email?: string | null
          customer_phone?: string | null
          status?: string
          payment_method: string
          payment_status?: string
          region: string
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          user_id?: string
          product_id?: string
          quantity?: number
          amount?: number
          customer_name?: string | null
          customer_email?: string | null
          customer_phone?: string | null
          status?: string
          payment_method?: string
          payment_status?: string
          region?: string
        }
      }
      commissions: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          user_id: string
          sale_id: string
          amount: number
          type: string
          status: string
          paid_at: string | null
          region: string
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          user_id: string
          sale_id: string
          amount: number
          type: string
          status?: string
          paid_at?: string | null
          region: string
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          user_id?: string
          sale_id?: string
          amount?: number
          type?: string
          status?: string
          paid_at?: string | null
          region?: string
        }
      }
      regions: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          name: string
          code: string
          currency: string
          tax_rate: number
          status: string
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          name: string
          code: string
          currency: string
          tax_rate: number
          status?: string
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          name?: string
          code?: string
          currency?: string
          tax_rate?: number
          status?: string
        }
      }
      commission_structures: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          region_id: string
          level: number
          percentage: number
          type: string
          status: string
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          region_id: string
          level: number
          percentage: number
          type: string
          status?: string
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          region_id?: string
          level?: number
          percentage?: number
          type?: string
          status?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      user_role: 'hq_admin' | 'agent' | 'reseller' | 'stockist' | 'customer'
      user_status: 'active' | 'inactive' | 'suspended' | 'pending'
      product_status: 'active' | 'inactive' | 'out_of_stock'
      sale_status: 'completed' | 'pending' | 'cancelled'
      payment_status: 'paid' | 'pending' | 'failed'
      commission_status: 'pending' | 'paid' | 'cancelled'
      commission_type: 'direct' | 'level' | 'binary' | 'matrix' | 'breakaway'
      region_status: 'active' | 'inactive'
    }
  }
}
