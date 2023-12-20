'use client';
import HorizontalCard from 'src/components/common/Card/HorizontalCard';
import React from 'react';
import { FcCommandLine } from 'react-icons/fc';
import { DevPostCT } from './styles';
import { postKeys, postListFetcher } from 'src/modules/query/post';
import { useQuery } from '@tanstack/react-query';

export default function DevPostList() {
  const { data: devPosts } = useQuery({
    queryKey: postKeys.list({ type: 'dev' }),
    queryFn: postListFetcher,
  });
  return (
    <DevPostCT>
      <h2>
        조금은 집중해서 읽는
        <strong>
          개발 포스트
          <FcCommandLine />
        </strong>
      </h2>
      <ul>
        {devPosts?.map(devPost => (
          <li key={devPost.id}>
            <HorizontalCard data={devPost} />
          </li>
        ))}
      </ul>
    </DevPostCT>
  );
}
