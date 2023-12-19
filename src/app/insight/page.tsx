'use client';
import ListItem from 'src/components/common/List/List';
import { InsightPage } from 'src/styles/mainStyles';
import React from 'react';
import { FcIdea } from 'react-icons/fc';
import { postQ } from 'src/modules/query/post';
import MetaHead from 'src/components/common/MetaHead';

// export const metadata = genDefaultMetadata({
//   title: '인사이트',
//   description: '여러가지 주제에 대한 생각을 기록합니다.',
//   url: 'https://www.conradev.me/insight/',
// });
export default function Insight() {
  const { data } = postQ.getPostList({ type: 'insight' });
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