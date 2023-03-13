/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { db } from 'libs/db';
import { Category, Post } from './types';

export type SearchFilter = {
  keyword: string;
};
export const searchKeys = {
  all: ['search'] as const,
  list: () => [...searchKeys.all, 'list'] as const,
  listFilter: (filters?: SearchFilter) =>
    [...searchKeys.list(), filters || null] as const,
};
export const searchQ = {
  getPostList: (
    filter?: SearchFilter,
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
  ) => useQuery(searchKeys.listFilter(filter), db.search.total(filter), opt),
};
