
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://watjrxbhxvscproshfag.supabase.co'
const supabaseKey ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndhdGpyeGJoeHZzY3Byb3NoZmFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjAxNTYxMDEsImV4cCI6MjAzNTczMjEwMX0.U_gN71NYBlHG8tiIjlnswUAokDmlRDnEDy0oGlLtRnY'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase