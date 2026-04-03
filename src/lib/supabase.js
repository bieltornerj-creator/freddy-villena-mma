import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hpioqqppvkmzuvbljhoa.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhwaW9xcXBwdmttenV2YmxqaG9hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUyMTkxNjIsImV4cCI6MjA5MDc5NTE2Mn0.-KPHPw7lKUUHf4bW_BttLTCRfUMsWw00wdJgRc9APNw'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
