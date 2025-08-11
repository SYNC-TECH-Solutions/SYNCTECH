import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseUrl || supabaseUrl.includes('your_supabase_url_here')) {
  throw new Error("Supabase URL is not defined or is still a placeholder. Please check your .env file.");
}

try {
  new URL(supabaseUrl);
} catch (error) {
  throw new Error(`The Supabase URL in your .env file is not a valid URL: ${supabaseUrl}`);
}


if (!supabaseKey || supabaseKey.includes('your_supabase_secret_key_here')) {
  throw new Error("Supabase key is not defined or is still a placeholder. Please check your .env file.");
}

// Create a single, server-side Supabase client
// This is safe to use in Server Actions and API Routes
export const supabase = createClient(supabaseUrl, supabaseKey);
