import { FetchQueryOptions } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { KeywordSearchRes } from './types';

export type SearchFilter = {
  keyword: { keyword: string };
  category: { slug: string };
};
export const searchKeys = {
  keyword: (filters?: SearchFilter['keyword']) => ['/search/keyword', filters],
  category: (filters?: SearchFilter['category']) => ['/search/category', filters],
} as const;

type SearchKeys = typeof searchKeys;

export const keywordSearchFetcher = async ({
  queryKey,
}: FetchQueryOptions<unknown, AxiosError, unknown, ReturnType<SearchKeys['keyword']>>) =>
  await axios
    .get<KeywordSearchRes>(`${process.env.NEXT_PUBLIC_API_HOST}/api${queryKey[0]}`, {
      params: queryKey[1],
    })
    .then(res => res.data);
