import React from 'react';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import CategoryDetail from './client';
import { categoryDetailFetcher, categoryKeys } from 'src/modules/query/category';
import { Category } from 'src/modules/query/types';
import { Metadata } from 'next';
import { genDefaultMetadata } from 'src/libs/genMetadata';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | null> {
  const slug = params.slug;

  const category: { category: Category } = await fetch(
    `${process.env.NEXT_PUBLIC_API_HOST}/api/categories/${slug}`
  )
    .then(res => res.json())
    .catch(() => null);
  if (!category) return null;
  return genDefaultMetadata({
    title: `${category.category.name || ''} 포스트`,
    keywords: category.category.name,
    url: `https://www.conradev.me/category/${category.category.slug}`,
  });
}
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
