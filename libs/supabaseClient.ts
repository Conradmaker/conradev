import { createClient } from '@supabase/supabase-js';
import { Database } from './supabase';

export const supabase = createClient<Database>(
  `https://${process.env.NEXT_PUBLIC_SPB_APP_ID}.supabase.co`,
  process.env.NEXT_PUBLIC_SPB_APP_SECRET as string
);
