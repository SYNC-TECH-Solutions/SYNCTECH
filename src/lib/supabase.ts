
import { createClient } from '@supabase/supabase-js';
import 'dotenv/config';

// These variables are loaded from your .env file
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SECRET_KEY;

if (!supabaseUrl) {
  throw new Error("Supabase URL is not defined. Please check your .env file.");
}

if (!supabaseKey) {
  throw new Error("Supabase secret key is not defined. Please check your .env file.");
}

// Create a single, server-side Supabase client
// This is safe to use in Server Actions and API Routes
export const supabase = createClient(supabaseUrl, supabaseKey);
