import { createClient } from "@supabase/supabase-js";

const supabase = createClient(VITE_SUBAPASE_URL, VITE_SUBAPASE_ANON_KEY);

export default supabase;