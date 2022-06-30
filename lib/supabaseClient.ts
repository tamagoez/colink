import { createClient } from "@supabase/supabase-js";

const supabaseUrl: string = process.env.supabaseUrl!;
const supabaseAnonKey: string = process.env.supabaseAnonKey!;

const supabase = createClient(supabaseUrl, supabaseAnonKey);
export default supabase;
