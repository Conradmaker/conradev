'use client';
import ListItem from 'src/components/common/List/List';
import MetaHead from 'src/components/common/MetaHead';
import { searchQ } from 'src/modules/query/search';
import React from 'react';
import { FcSearch } from 'react-icons/fc';
import { InsightPage } from 'src/styles/mainStyles';

// export const metadata = genDefaultMetadata({
//   title: '카테고리',
//   description: '검색결과',
//   url: 'https://www.conradev.me/category/',
// });

export default function Category({ params }: { params: { slug: string } }) {
  const { data } = searchQ.getCategorySearch({ slug: (params.slug as string) || '' });
  return (
    <>
      <MetaHead.Default
        title={data?.category.name || ''}
        description="검색결과"
        url="https://www.conradev.me/category/"
      />
      <InsightPage className="inner">
        <div className="head">
          <div>
            <h1>
              카테고리
              <FcSearch />
            </h1>
          </div>
          <p>{data?.category?.name}에 관련된 포스트</p>
        </div>

        <div className="content">
          <ul>
            {data?.post?.map((insight, idx) => (
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
