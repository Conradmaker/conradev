export type Category = {
  id: number;
  name: string;
  slug: string | null;
  created_at?: Date;
  count?: number;
};
export type Post = {
  id?: number;
  title: string;
  description: string;
  slug: string;
  content: string;
  type: number;
  cover_horizontal: string;
  cover_vertical: string;
  keywords: string;
  hits?: number;
  read_time: number;
  published_at: Date;
  created_at?: Date;
  categories?: Category[] | null;
};
export type PostPayload = Omit<Post, 'id' | 'created_at' | 'hits' | 'categories'> & {
  categories?: number[];
};

export type Filter = {
  limit?: number;
  page?: number;
};

export type KeywordSearchRes = {
  insight: Array<Pick<Post, 'id' | 'title' | 'slug'>>;
  dev: Array<Pick<Post, 'id' | 'title' | 'slug'>>;
  category: Array<Pick<Category, 'id' | 'slug'> & { title: string }>;
};
export type CategoryDetail = {
  post: Array<Post & { categories: Category[] }>;
  category: Category;
};
