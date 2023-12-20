/* eslint-disable react-hooks/rules-of-hooks */
import { FetchQueryOptions, MutationFunction } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { Post, PostPayload } from './types';

export type PostListFilter = {
  type?: 'insight' | 'dev' | 'all';
  page?: number;
  limit?: number;
};
export const postKeys = {
  list: (filters?: PostListFilter) => ['/posts', filters] as const,
  detail: (postId: string) => [`/posts/${postId}`] as const,
};
type PostKeys = typeof postKeys;

export const postListFetcher = async ({
  queryKey,
}: FetchQueryOptions<unknown, AxiosError, unknown, ReturnType<PostKeys['list']>>) =>
  await axios
    .get<Post[]>(`${process.env.NEXT_PUBLIC_API_HOST}/api${queryKey[0]}`, {
      params: queryKey[1],
    })
    .then(res => res.data);

export const postDetailFetcher = async ({
  queryKey,
}: FetchQueryOptions<unknown, AxiosError, unknown, ReturnType<PostKeys['detail']>>) =>
  await axios
    .get<Post>(`${process.env.NEXT_PUBLIC_API_HOST}/api${queryKey[0]}`, {})
    .then(res => res.data);

export const createPostFetcher: MutationFunction<Post, PostPayload> = data =>
  axios
    .post<Post>(`${process.env.NEXT_PUBLIC_API_HOST}/api/posts`, data)
    .then(res => res.data);

export const updatePostFetcher: MutationFunction<
  Post,
  Partial<PostPayload> & { slug: string }
> = data =>
  axios
    .patch<Post>(`${process.env.NEXT_PUBLIC_API_HOST}/api/posts/${data.slug}`, data)
    .then(res => res.data);
