export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      marketing_campaigns: {
        Row: {
          created_at: string
          id: string
          image_url: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          image_url?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          image_url?: string | null
        }
        Relationships: []
      }
      team_members: {
        Row: {
          created_at: string
          id: string
          image_url: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          image_url?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          image_url?: string | null
        }
        Relationships: []
      }
      testimonials: {
        Row: {
          author: string
          business: string
          city: string
          created_at: string
          id: string
          logo_url: string | null
          quote: string
          state: string
          thumbnail_url: string | null
          video_url: string | null
        }
        Insert: {
          author: string
          business: string
          city: string
          created_at?: string
          id?: string
          logo_url?: string | null
          quote: string
          state: string
          thumbnail_url?: string | null
          video_url?: string | null
        }
        Update: {
          author?: string
          business?: string
          city?: string
          created_at?: string
          id?: string
          logo_url?: string | null
          quote?: string
          state?: string
          thumbnail_url?: string | null
          video_url?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
