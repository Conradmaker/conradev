import React from 'react';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import CategoryDetail from './client';
import { categoryDetailFetcher, categoryKeys } from 'src/modules/query/category';

// export const metadata = genDefaultMetadata({
//   title: '카테고리',
//   description: '검색결과',
//   url: 'https://www.conradev.me/category/',
// });

export default async function Page({ params }: { params: { slug: string } }) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: categoryKeys.detail(params.slug),
    queryFn: categoryDetailFetcher,
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CategoryDetail slug={params.slug} />
    </HydrationBoundary>
  );
}
