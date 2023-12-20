import React from 'react';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import InsightPostList from './client';
import { postKeys, postListFetcher } from 'src/modules/query/post';

// export const metadata = genDefaultMetadata({
//   title: '인사이트',
//   description: '여러가지 주제에 대한 생각을 기록합니다.',
//   url: 'https://www.conradev.me/insight/',
// });
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
