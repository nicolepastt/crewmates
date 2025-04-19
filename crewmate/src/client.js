import { createClient } from '@supabase/supabase-js'


//project URL and Project API
const URL = 'https://zpzxuumhfixexxuslpia.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpwenh1dW1oZml4ZXh4dXNscGlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ0Nzg4NDUsImV4cCI6MjA2MDA1NDg0NX0.RUUPPreMg_VBVhOSNkU9ZZUlP8YOKNAP9392CHTwSJY';


//export supabase variable
export const supabase = createClient(URL, API_KEY);




