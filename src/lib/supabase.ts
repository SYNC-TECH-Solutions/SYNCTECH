import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseUrl || supabaseUrl.includes('YOUR_SUPABASE_URL')) {
  throw new Error("Supabase URL is not defined or is still a placeholder. Please check your .env.local file.");
}

try {
  new URL(supabaseUrl);
} catch (error) {
  throw new Error(`The Supabase URL in your .env.local file is not a valid URL: ${supabaseUrl}`);
}


if (!supabaseKey || supabaseKey.includes('YOUR_SUPABASE_SECRET_KEY')) {
  throw new Error("Supabase key is not defined or is still a placeholder. Please check your .env.local file.");
}

// Create a single, server-side Supabase client
// This is safe to use in Server Actions and API Routes
export const supabase = createClient(supabaseUrl, supabaseKey);
