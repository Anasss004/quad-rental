import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  // Doesn't crash the build (important for preview deploys without env vars
  // configured yet) — falls back to a placeholder so the app still builds.
  // Any real Supabase call will simply fail gracefully at runtime instead.
  console.warn(
    "Supabase env vars are missing. Copy .env.example to .env.local and fill in your project values."
  );
}

export const supabase = createClient(
  supabaseUrl || "https://placeholder.supabase.co",
  supabaseAnonKey || "placeholder-anon-key"
);
