import React from 'react';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { postKeys, postListFetcher } from 'src/modules/query/post';
import { categoryKeys, categoryListFetcher } from 'src/modules/query/category';
import DevPostList from './client';
import { Metadata } from 'next';
import { genDefaultMetadata } from 'src/libs/genMetadata';

export async function generateMetadata(): Promise<Metadata | null> {
  return genDefaultMetadata({
    title: `개발 포스트`,
    keywords: '개발포스트,개발블로그',
    url: `https://www.conradev.me/dev`,
  });
}
export default async function Page() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: postKeys.list({ type: 'dev' }),
    queryFn: postListFetcher,
  });
  await queryClient.prefetchQuery({
    queryKey: categoryKeys.list({ type: 'dev' }),
    queryFn: categoryListFetcher,
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <DevPostList />
    </HydrationBoundary>
  );
}
