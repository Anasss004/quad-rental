import { createClient } from "@supabase/supabase-js";

// SERVER-ONLY client using the service_role (secret) key — bypasses RLS.
// Never import this file from a "use client" component; it must only run
// in API routes / server code where SUPABASE_SERVICE_ROLE_KEY is available.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co";
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "placeholder-service-role-key";

export const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey, {
  auth: { persistSession: false },
});
