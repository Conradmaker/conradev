import Layout from 'components/common/Layout';
import ListItem from 'components/common/List/List';
import MetaHead from 'components/common/MetaHead';
import { searchQ } from 'modules/query/search';
import { useRouter } from 'next/router';
import React from 'react';
import { FcSearch } from 'react-icons/fc';
import { InsightPage } from 'styles/mainStyles';

export default function Category() {
  const { query } = useRouter();
  const { data } = searchQ.getCategorySearch({ slug: (query.slug as string) || '' });
  return (
    <>
      <MetaHead.Default
        title={data?.category.name || ''}
        description="검색결과"
        url="https://www.conradev.me/category/"
      />
      <Layout>
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
      </Layout>
    </>
  );
}
