import { createClient } from '@supabase/supabase-js';
import { Database } from './supabase';

export const supabase = createClient<Database>(
  'https://istuyhpbautvjypbjrpy.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlzdHV5aHBiYXV0dmp5cGJqcnB5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgxMjIxNjAsImV4cCI6MTk5MzY5ODE2MH0.pAqpuoPyeQaQZSom6hQPzsD_UdsEoB1-wz2s8RmUJzI'
);
