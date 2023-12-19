/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { db } from 'src/libs/db';
import { Category, Post } from './types';

export type SearchFilter = {
  keyword: { keyword: string };
  category: { slug: string };
};
export const searchKeys = {
  all: ['search'] as const,
  list: () => [...searchKeys.all, 'list'] as const,
  listFilter: (filters?: SearchFilter['category'] | SearchFilter['keyword']) =>
    [...searchKeys.list(), filters || null] as const,
};
export const searchQ = {
  getKeywordSearch: (
    filter?: SearchFilter['keyword'],
    opt?: UseQueryOptions<
      Promise<{
        insight: Array<Pick<Post, 'id' | 'title' | 'slug'>>;
        dev: Array<Pick<Post, 'id' | 'title' | 'slug'>>;
        category: Array<Pick<Category, 'id' | 'slug'> & { title: string }>;
      }>,
      Error,
      {
        insight: Array<Pick<Post, 'id' | 'title' | 'slug'>>;
        dev: Array<Pick<Post, 'id' | 'title' | 'slug'>>;
        category: Array<Pick<Category, 'id' | 'slug'> & { title: string }>;
      },
      ReturnType<(typeof searchKeys)['listFilter']>
    >
  ) => useQuery(searchKeys.listFilter(filter), db.search.keyword(filter), opt),

  getCategorySearch: (
    filter: SearchFilter['category'],
    opt?: UseQueryOptions<
      Promise<{
        post: Array<Post & { categories: Category[] }>;
        category: Category;
      }>,
      Error,
      {
        post: Array<Post & { categories: Category[] }>;
        category: Category;
      },
      ReturnType<(typeof searchKeys)['listFilter']>
    >
  ) =>
    useQuery({
      queryKey: searchKeys.listFilter(filter),
      queryFn: db.search.category(filter),
      ...opt,
    }),
  // ) => useQuery(searchKeys.listFilter(filter), db.search.category(filter), { opt }),
};
