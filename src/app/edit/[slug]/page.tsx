'use client';
import { usePostFormStore } from 'src/modules/zustand/PostForm';
import dynamic from 'next/dynamic';
import React, { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { postDetailFetcher, postKeys } from 'src/modules/query/post';

const MDEditor = dynamic(() => import('../../../components/Editor/MdEditer'), {
  ssr: false,
  suspense: true,
}) as unknown as React.FC;

export default function Index({ params }: { params: { slug: string } }) {
  const { updateState } = usePostFormStore();
  const { data } = useQuery({
    queryKey: postKeys.detail(params.slug),
    queryFn: postDetailFetcher,
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
      keywords:
        data.keywords ||
        [
          '개발',
          '프로그래밍',
          '코딩',
          '프론트엔드',
          '백엔드',
          '스타트업',
          '기술블로그',
        ].join(','),
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
