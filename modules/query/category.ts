/* eslint-disable react-hooks/rules-of-hooks */
import { useMutation, useQuery, UseQueryOptions } from '@tanstack/react-query';
import { db } from 'libs/db';
import getQueryClient from './queryClient';
import { Category, Filter } from './types';

export const categoryKeys = {
  all: ['category'] as const,
  list: () => [...categoryKeys.all, 'list'] as const,
  listFilter: (filters?: Filter) => [...categoryKeys.list(), filters || null] as const,
  detail: (id: number | null) => [...categoryKeys.all, id] as const,
};

export const categoryQ = {
  getCategoryList: (
    opt?: UseQueryOptions<
      Promise<Category[]>,
      Error,
      Category[],
      ReturnType<typeof categoryKeys['listFilter']>
    >
  ) =>
    useQuery(
      categoryKeys.listFilter(),
      async () => {
        try {
          const result = await db.category.getList();
          return result;
        } catch (e) {
          console.error(e);
          throw new Error('');
        }
      },
      opt
    ),
  addCategory: () =>
    useMutation({
      mutationFn: (payload: { name: string; slug: string }) => {
        return db.category.add(payload);
      },
      onSuccess: () => {
        getQueryClient.refetchQueries({ queryKey: categoryKeys.listFilter() });
      },
    }),
};
