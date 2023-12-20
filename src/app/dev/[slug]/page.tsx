import React from 'react';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import DevPostDetail from './client';
import { postDetailFetcher, postKeys } from 'src/modules/query/post';

export default async function Page({ params }: { params: { slug: string } }) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: postKeys.detail(params.slug),
    queryFn: postDetailFetcher,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <DevPostDetail slug={params.slug} />
    </HydrationBoundary>
  );
}
