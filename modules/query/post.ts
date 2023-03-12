/* eslint-disable react-hooks/rules-of-hooks */
import { useMutation, useQuery, UseQueryOptions } from '@tanstack/react-query';
import { db } from 'libs/db';
import getQueryClient from './queryClient';
import { Filter, Post } from './types';

export type PostFilter = {
  type?: 'insight' | 'dev' | 'all';
} & Filter;
export const postKeys = {
  all: ['post'] as const,
  list: () => [...postKeys.all, 'list'] as const,
  listFilter: (filters?: PostFilter) => [...postKeys.list(), filters || null] as const,
  detail: (id: string) => [...postKeys.all, id] as const,
};
export const postQ = {
  getPostList: (
    filter?: PostFilter,
    opt?: UseQueryOptions<
      Promise<Post[]>,
      Error,
      Post[],
      ReturnType<typeof postKeys['listFilter']>
    >
  ) =>
    useQuery(
      postKeys.listFilter(filter),
      async () => {
        try {
          const result = await db.post.getList(filter);
          return result;
        } catch (e) {
          console.error(e);
          throw new Error('');
        }
      },
      opt
    ),
  getPostDetail: (
    slug: string,
    opt?: UseQueryOptions<
      Promise<Post>,
      Error,
      Post,
      ReturnType<typeof postKeys['detail']>
    >
  ) =>
    useQuery(
      postKeys.detail(slug),
      async () => {
        try {
          const result = await db.post.getDetail(slug);
          return result;
        } catch (e) {
          console.error(e);
          throw new Error('');
        }
      },
      opt
    ),
  addPost: () =>
    useMutation({
      mutationFn: (payload: { post: Post; categories: number[] }) => {
        return db.post.add(payload);
      },
      onSuccess: () => {
        getQueryClient.refetchQueries({ queryKey: postKeys.listFilter() });
      },
    }),
};
