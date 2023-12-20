'use client';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FcIdea } from 'react-icons/fc';
import ListItem from 'src/components/common/List/List';
import { postKeys, postListFetcher } from 'src/modules/query/post';
import { InsightPage } from 'src/styles/mainStyles';

export default function InsightPostList() {
  const { data } = useQuery({
    queryKey: postKeys.list({ type: 'insight' }),
    queryFn: postListFetcher,
  });
  return (
    <>
      <InsightPage className="inner">
        <div className="head">
          <div>
            <h1>
              인사이트
              <FcIdea />
            </h1>
          </div>
          <p>주관적인 시점으로 세상을 바라보는 글</p>
        </div>
        <div className="content">
          <ul>
            {data?.map((insight, idx) => (
              <li key={insight.id + ',' + idx}>
                <ListItem data={insight} />
              </li>
            ))}
          </ul>
        </div>
      </InsightPage>
    </>
  );
}
