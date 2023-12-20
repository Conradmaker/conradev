import React from 'react';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { postKeys, postListFetcher } from 'src/modules/query/post';
import { categoryKeys, categoryListFetcher } from 'src/modules/query/category';
import DevPostList from './client';

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
