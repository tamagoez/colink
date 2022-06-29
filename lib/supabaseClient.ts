import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabaseUrl = process.env.supabaseUrl;
const supabaseAnonKey = process.env.supabaseAnonKey;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
