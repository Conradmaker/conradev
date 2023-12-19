export type Category = {
  id: number;
  name: string;
  slug: string | null;
  created_at?: Date;
  count?: number;
};
export type Post = {
  content: string | null;
  cover_horizontal: string | null;
  cover_vertical: string | null;
  created_at?: string | null;
  description: string | null;
  slug: string | null;
  hits?: number | null;
  id?: number;
  keywords: string | null;
  published_at: string | null;
  read_time: number | null;
  title: string | null;
  type: number | null;
  categories?: Category[] | null;
};

export type Filter = {
  limit?: number;
  page?: number;
};
