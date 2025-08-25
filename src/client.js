import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xpctebqkakpbroliappv.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhwY3RlYnFrYWtwYnJvbGlhcHB2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU5MTg0NjIsImV4cCI6MjA3MTQ5NDQ2Mn0.3O4D2h4PRjNp9QJqodZjEG5eRXko-K2xX1ork_GkqmE';
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
