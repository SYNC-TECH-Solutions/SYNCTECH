
import { createClient } from '@supabase/supabase-js';

// These variables are loaded from your .env file
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SECRET_KEY!;

// Create a single, server-side Supabase client
// This is safe to use in Server Actions and API Routes
export const supabase = createClient(supabaseUrl, supabaseKey);
