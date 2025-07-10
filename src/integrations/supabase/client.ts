import { createClient } from '@supabase/supabase-js'
import { Database } from './types'

// IMPORTANT: Update these values with your own Supabase project details.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "YOUR_SUPABASE_URL_HERE";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "YOUR_SUPABASE_ANON_KEY_HERE";

if (supabaseUrl === "YOUR_SUPABASE_URL_HERE" || supabaseAnonKey === "YOUR_SUPABASE_ANON_KEY_HERE") {
  console.warn("Supabase credentials are not configured. Please update client.ts with your project URL and anon key from your Supabase dashboard.");
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)