import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zeiadviluhdftdpwqoqq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InplaWFkdmlsdWhkZnRkcHdxb3FxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjAwMTk3MjIsImV4cCI6MjAzNTU5NTcyMn0.pzerl0MiOfbtYZpHBQ_KKOH8NwDCAgNgHqKtkMc4ByY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
