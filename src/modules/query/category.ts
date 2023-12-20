import { FetchQueryOptions, MutationFunction } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { Category, CategoryDetail } from './types';

export type CategoryFilter = {
  type?: 'insight' | 'dev' | 'all';
  limit?: number;
  page?: number;
};

export const categoryKeys = {
  list: (filters?: CategoryFilter) => ['/categories', filters] as const,
  detail: (slug: string | null) => [`/categories/${slug}`] as const,
};
type CategoryKeys = typeof categoryKeys;

export const categoryListFetcher = ({
  queryKey,
}: FetchQueryOptions<unknown, AxiosError, unknown, ReturnType<CategoryKeys['list']>>) =>
  axios
    .get<Category[]>(`${process.env.NEXT_PUBLIC_API_HOST}/api/categories`, {
      params: queryKey[1],
    })
    .then(res => res.data);

export const categoryDetailFetcher = async ({
  queryKey,
}: FetchQueryOptions<unknown, AxiosError, unknown, ReturnType<CategoryKeys['detail']>>) =>
  await axios
    .get<CategoryDetail>(`${process.env.NEXT_PUBLIC_API_HOST}/api${queryKey[0]}`, {})
    .then(res => res.data);

export const createCategoryFetcher: MutationFunction<
  Category,
  { name: string; slug: string; type: number }
> = (data: { name: string; slug: string; type: number }) =>
  axios
    .post<Category>(`${process.env.NEXT_PUBLIC_API_HOST}/api/categories`, data)
    .then(res => res.data);
