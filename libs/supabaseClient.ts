import { createClient } from '@supabase/supabase-js';

export const supabase = createClient<Database>(
  `https://${process.env.NEXT_PUBLIC_SPB_APP_ID}.supabase.co`,
  process.env.NEXT_PUBLIC_SPB_APP_SECRET as string
);
export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export interface Database {
  public: {
    Tables: {
      categories: {
        Row: {
          created_at: string | null;
          id: number;
          name: string;
          slug: string | null;
          type: number | null;
        };
        Insert: {
          created_at?: string | null;
          id?: number;
          name: string;
          slug?: string | null;
          type?: number | null;
        };
        Update: {
          created_at?: string | null;
          id?: number;
          name?: string;
          slug?: string | null;
          type?: number | null;
        };
      };
      post_categories: {
        Row: {
          category_id: number;
          created_at: string | null;
          post_id: number;
        };
        Insert: {
          category_id: number;
          created_at?: string | null;
          post_id: number;
        };
        Update: {
          category_id?: number;
          created_at?: string | null;
          post_id?: number;
        };
      };
      posts: {
        Row: {
          content: string | null;
          cover_horizontal: string | null;
          cover_vertical: string | null;
          created_at: string | null;
          description: string | null;
          hits: number | null;
          id: number;
          keywords: string | null;
          published_at: string | null;
          read_time: number | null;
          slug: string | null;
          title: string | null;
          type: number | null;
        };
        Insert: {
          content?: string | null;
          cover_horizontal?: string | null;
          cover_vertical?: string | null;
          created_at?: string | null;
          description?: string | null;
          hits?: number | null;
          id?: number;
          keywords?: string | null;
          published_at?: string | null;
          read_time?: number | null;
          slug?: string | null;
          title?: string | null;
          type?: number | null;
        };
        Update: {
          content?: string | null;
          cover_horizontal?: string | null;
          cover_vertical?: string | null;
          created_at?: string | null;
          description?: string | null;
          hits?: number | null;
          id?: number;
          keywords?: string | null;
          published_at?: string | null;
          read_time?: number | null;
          slug?: string | null;
          title?: string | null;
          type?: number | null;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
