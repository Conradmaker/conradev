'use client';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FcIdea } from 'react-icons/fc';
import ListItem from 'src/components/common/List/List';
import MetaHead from 'src/components/common/MetaHead';
import { postKeys, postListFetcher } from 'src/modules/query/post';
import { InsightPage } from 'src/styles/mainStyles';

export default function InsightPostList() {
  const { data } = useQuery({
    queryKey: postKeys.list({ type: 'insight' }),
    queryFn: postListFetcher,
  });
  return (
    <>
      <MetaHead.Default
        title="인사이트"
        description="여러가지 주제에 대한 생각을 기록합니다."
        url="https://www.conradev.me/insight/"
      />
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
