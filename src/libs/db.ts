/* eslint-disable @typescript-eslint/no-explicit-any */
import { CategoryFilter } from 'src/modules/query/category';
import { PostFilter } from 'src/modules/query/post';
import { SearchFilter } from 'src/modules/query/search';
import { Category, Post } from 'src/modules/query/types';
import { supabase } from './supabaseClient';

const isCount = (
  v: { count: unknown } | { count: unknown }[] | null
): v is Array<any> => {
  return (v as Array<any>).length > 0;
};

export const getCategoryListFetcher =
  (filter?: CategoryFilter) => async (): Promise<Category[]> => {
    try {
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
    } catch (e) {
      console.error(e);
      throw new Error('');
    }
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

export const getPostFetcher = (filter?: PostFilter) => async (): Promise<Post[]> => {
  try {
    const limit = filter?.limit ? filter.limit - 1 : 11;
    const offset = filter?.page ? (filter.page - 1) * limit : 0;
    const result = await supabase
      .from('posts')
      .select('*,categories(id,name,slug)')
      .neq('type', filter?.type ? (filter.type === 'insight' ? 2 : 1) : 0)
      .limit(limit)
      .range(offset, offset + limit)
      .order('published_at', { ascending: false });
    return (result.data as Post[]) || [];
  } catch (e) {
    console.error(e);
    throw new Error('');
  }
};

export const getPostDetailFetcher = (slug: string) => async (): Promise<Post> => {
  try {
    const result = await supabase
      .from('posts')
      .select('*,categories(id,name,slug)')
      .eq('slug', slug)
      .single();
    if (!result.data) throw new Error('');
    return result.data as Post;
  } catch (e) {
    console.error(e);
    throw new Error('');
  }
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

export const updatePost = async ({
  post,
  categories,
}: {
  post: Post;
  categories: number[];
}): Promise<boolean> => {
  const result = await supabase
    .from('posts')
    .update(post)
    .eq('slug', post.slug)
    .select('id')
    .single();
  if (!result.data) return false;
  await supabase.from('post_categories').delete().eq('post_id', result.data.id);
  await supabase
    .from('post_categories')
    .insert(categories.map(c => ({ post_id: result.data.id, category_id: c })));
  return true;
};

export const getKeywordSearchResult =
  (filter?: SearchFilter['keyword']) =>
  async (): Promise<{
    insight: Array<Pick<Post, 'id' | 'title' | 'slug'>>;
    dev: Array<Pick<Post, 'id' | 'title' | 'slug'>>;
    category: Array<Pick<Category, 'id' | 'slug'> & { title: string }>;
  }> => {
    try {
      if (!filter?.keyword.trim()) {
        return {
          category: [],
          insight: [],
          dev: [],
        };
      }
      const postResult = await supabase
        .from('posts')
        .select('slug,title,id,content,type')
        .or(
          `title.like.%${filter?.keyword || ''}%,content.like.%${filter?.keyword || ''}%`
        )
        .limit(6);

      const categoryResult = await supabase
        .from('categories')
        .select('slug,name,id')
        .like('name', `%${filter?.keyword || ''}%`);
      return {
        category:
          categoryResult.data?.map(v => ({ id: v.id, title: v.name, slug: v.slug })) ||
          [],
        insight: postResult.data?.filter(v => v.type === 1) || [],
        dev: postResult.data?.filter(v => v.type === 2) || [],
      };
    } catch (e) {
      console.error(e);
      throw new Error('');
    }
  };

export const getCategorySearchResult =
  (filter?: SearchFilter['category']) =>
  async (): Promise<{
    post: Array<Post & { categories: Category[] }>;
    category: Category;
  }> => {
    try {
      const categoryResult = await supabase
        .from('categories')
        .select('id,name,slug')
        .filter('slug', 'eq', filter?.slug || '')
        .single();
      const postResult = await supabase
        .from('posts')
        .select('*,categories!inner(id,name,slug)')
        .filter('categories.slug', 'eq', filter?.slug || '')
        .order('published_at', { ascending: false });
      return {
        category: categoryResult.data as Category,
        post: (postResult.data as Array<Post & { categories: Category[] }>) || [],
      };
    } catch (e) {
      console.error(e);
      throw new Error('');
    }
  };
const getSitemapPost = async (): Promise<Post[]> => {
  try {
    const result = await supabase
      .from('posts')
      .select('slug,type')
      .order('published_at', { ascending: false });
    return (result.data as Post[]) || [];
  } catch (e) {
    console.error(e);
    throw new Error('');
  }
};
export const db = {
  category: {
    getList: getCategoryListFetcher,
    add: addCategory,
  },
  post: {
    getList: getPostFetcher,
    getDetail: getPostDetailFetcher,
    add: addPost,
    update: updatePost,
  },
  search: {
    keyword: getKeywordSearchResult,
    category: getCategorySearchResult,
  },
  sitemap: {
    post: getSitemapPost,
  },
};
