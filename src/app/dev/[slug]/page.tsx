import React from 'react';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import DevPostDetail from './client';
import { postDetailFetcher, postKeys } from 'src/modules/query/post';
import { Metadata } from 'next';
import { genPostMetadata } from 'src/libs/genMetadata';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | null> {
  const slug = params.slug;

  const post = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/api/posts/${slug}`)
    .then(res => res.json())
    .catch(() => null);
  if (!post) return null;
  return genPostMetadata(post);
}
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
