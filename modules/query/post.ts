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
      ReturnType<(typeof postKeys)['listFilter']>
    >
  ) => useQuery(postKeys.listFilter(filter), db.post.getList(filter), opt),

  getPostDetail: (
    slug: string,
    opt?: UseQueryOptions<
      Promise<Post>,
      Error,
      Post,
      ReturnType<(typeof postKeys)['detail']>
    >
  ) => useQuery(postKeys.detail(slug), db.post.getDetail(slug), opt),
  addPost: () =>
    useMutation({
      mutationFn: (payload: { post: Post; categories: number[] }) => {
        return db.post.add(payload);
      },
      onSuccess: () => {
        getQueryClient.refetchQueries({ queryKey: postKeys.listFilter() });
      },
    }),
  updatePost: () =>
    useMutation({
      mutationFn: (payload: { post: Post; categories: number[] }) => {
        return db.post.update(payload);
      },
      onSuccess: () => {
        getQueryClient.refetchQueries({ queryKey: postKeys.listFilter() });
      },
    }),
};
