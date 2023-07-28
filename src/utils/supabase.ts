import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://soteogxtiwrjddjykvsy.supabase.co";
const supabaseAnonPublic =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNvdGVvZ3h0aXdyamRkanlrdnN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAzMDk0NjgsImV4cCI6MjAwNTg4NTQ2OH0.8zM75ID7GeBavpadvdA-86l0IbpSw1E_YuO3c8F_2D8";

export const supabase = createClient(supabaseUrl, supabaseAnonPublic);
