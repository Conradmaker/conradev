/* eslint-disable @typescript-eslint/no-explicit-any */
import { CategoryFilter } from 'modules/query/category';
import { PostFilter } from 'modules/query/post';
import { Category, Post } from 'modules/query/types';
import { supabase } from './supabaseClient';

const isCount = (
  v: { count: unknown } | { count: unknown }[] | null
): v is Array<any> => {
  return (v as Array<any>).length > 0;
};

export const getCategories = async (filter?: CategoryFilter): Promise<Category[]> => {
  const result = await supabase
    .from('categories')
    .select('id,name,slug,post_categories(count)')
    .neq('type', filter?.type ? (filter.type === 'insight' ? 2 : 1) : 0);
  return (
    result.data?.map(v => ({
      ...v,
      count: isCount(v.post_categories) ? (v.post_categories[0].count as number) : 0,
    })) || []
  );
};

export const addCategory = async (payload: {
  name: string;
  slug: string;
  type: number;
}) => {
  const exist = await supabase
    .from('categories')
    .select('id,name,slug')
    .eq('name', payload.name);
  if (exist.data?.length) return false;
  const result = await supabase.from('categories').insert(payload);
  if (result.status === 201) return true;
  else false;
};

export const getPosts = async (filter?: PostFilter): Promise<Post[]> => {
  const limit = filter?.limit ? filter.limit - 1 : 11;
  const offset = filter?.page ? (filter.page - 1) * limit : 0;
  const result = await supabase
    .from('posts')
    .select('*')
    .neq('type', filter?.type ? (filter.type === 'insight' ? 2 : 1) : 0)
    .limit(limit)
    .range(offset, offset + limit)
    .order('published_at', { ascending: false });
  return result.data || [];
};
export const getPostById = async (slug: string): Promise<Post> => {
  const result = await supabase
    .from('posts')
    .select('*,categories(id,name,slug)')
    .eq('slug', slug)
    .single();
  if (!result.data) throw new Error('');
  return result.data as Post;
};

export const addPost = async ({
  post,
  categories,
}: {
  post: Post;
  categories: number[];
}): Promise<boolean> => {
  const result = await supabase.from('posts').insert(post).select('id').single();
  if (!result.data) return false;
  await supabase
    .from('post_categories')
    .insert(categories.map(c => ({ post_id: result.data.id, category_id: c })));
  return true;
};

export const db = {
  category: {
    getList: getCategories,
    add: addCategory,
  },
  post: {
    getList: getPosts,
    getDetail: getPostById,
    add: addPost,
  },
};
