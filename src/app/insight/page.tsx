import React from 'react';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import InsightPostList from './client';
import { postKeys, postListFetcher } from 'src/modules/query/post';
import { Metadata } from 'next';
import { genDefaultMetadata } from 'src/libs/genMetadata';

export async function generateMetadata(): Promise<Metadata | null> {
  return genDefaultMetadata({
    title: `인사이트 포스트`,
    keywords: '개발포스트,개발블로그,인사이트,정보',
    url: `https://www.conradev.me/insight`,
  });
}
export default async function Page() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: postKeys.list({ type: 'insight' }),
    queryFn: postListFetcher,
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <InsightPostList />
    </HydrationBoundary>
  );
}
