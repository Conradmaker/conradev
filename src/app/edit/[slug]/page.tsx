'use client';
// import { dehydrate } from '@tanstack/react-query';
// import { db } from 'src/libs/db';
import { postQ } from 'src/modules/query/post';
// import getQueryClient from 'src/modules/query/queryClient';
import { usePostFormStore } from 'src/modules/zustand/PostForm';
// import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import React, { useEffect } from 'react';

const MDEditor = dynamic(() => import('../../../components/Editor/MdEditer'), {
  ssr: false,
  suspense: true,
}) as unknown as React.FC;

export default function Index({ params }: { params: { slug: string } }) {
  const { updateState } = usePostFormStore();
  const { data } = postQ.getPostDetail((params.slug as string) || '', {
    enabled: params.slug !== undefined && params.slug !== 'new',
  });
  useEffect(() => {
    if (!data) return;
    updateState({
      categories: data.categories?.map(v => v.id) || [],
      content: data.content || '',
      title: data.title || '',
      description: data.description || '',
      cover_horizontal: data.cover_horizontal || '',
      cover_vertical: data.cover_vertical || '',
      keywords: data.keywords || '',
      published_at: data.published_at ? new Date(data.published_at) : new Date(),
      read_time: data.read_time || 0,
      type: data.type === 1 ? 'insight' : 'dev',
      slug: data.slug || '',
    });
  }, [data, updateState]);

  return (
    <div style={{ height: '100vh' }}>
      <MDEditor />
    </div>
  );
}

// export const getServerSideProps: GetServerSideProps = async ctx => {
//   const queryClient = getQueryClient;
//   if (ctx.params?.slug && ctx.params.slug !== 'new') {
//     const slug = ctx.params.slug as string;
//     await queryClient.prefetchQuery(postKeys.detail(slug), db.post.getDetail(slug));
//   }
//   return {
//     props: {
//       dehydratedQuery: dehydrate(queryClient),
//     },
//   };
// };
