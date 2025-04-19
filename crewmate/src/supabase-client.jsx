import { createClient } from '@supabase/supabase-js'

const supabaseURL = import.meta.env.VITE_SUPABASE_URL;
const supabaseAPI = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseURL, supabaseAPI); 
export default supabase;
