import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import React from 'react';
import { postDetailFetcher, postKeys } from 'src/modules/query/post';
import InsightPostDetail from './client';

export default async function Page({ params }: { params: { slug: string } }) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: postKeys.detail(params.slug),
    queryFn: postDetailFetcher,
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <InsightPostDetail slug={params.slug} />
    </HydrationBoundary>
  );
}
