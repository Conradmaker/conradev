import React from 'react';
import Layout from '../../components/common/Layout';
import { PostCT } from '../../styles/postStyles';
import HeadingAnchor from 'components/Post/HeadingAnchor';
import useHeadAnchor from 'hooks/useHeadAnchor';
import { HiOutlineCalendar, HiOutlineClock } from 'react-icons/hi';
import MdView from 'components/Post/MdView';
import { postKeys, postQ } from 'modules/query/post';
import { useRouter } from 'next/router';
import getQueryClient from 'modules/query/queryClient';
import { dehydrate } from '@tanstack/react-query';
import { GetServerSideProps } from 'next';
import { db } from 'libs/db';
import MetaHead from 'components/common/MetaHead';

export default function Post() {
  const { query } = useRouter();
  const { data } = postQ.getPostDetail((query.slug as string) || '');
  const { idList } = useHeadAnchor([data?.content]);

  return (
    <>
      <MetaHead data={data} />
      <Layout>
        {data ? (
          <PostCT>
            <div className="inner">
              <h1 className="title">{data.title}</h1>
              <div className="info">
                <ul className="category_list">
                  {data.categories?.map((v, idx) => (
                    <li key={idx}>{v.name}</li>
                  ))}
                </ul>
                <ul className="detail">
                  <li>
                    <HiOutlineClock />
                    <span>13분 분량</span>
                  </li>
                  <li>
                    <HiOutlineCalendar />
                    <span>2023년 03월 03일</span>
                  </li>
                </ul>
              </div>
              <img
                src={data.cover_horizontal || ''}
                alt={data.title || ''}
                title={data.title || ''}
                className="thumb"
              />
            </div>
            <div className="viewer">
              <aside />
              <MdView type="dev" content={data.content || ''} />
              <aside>
                <ul>
                  {idList.map(v => (
                    <HeadingAnchor data={v} key={v.idx} />
                  ))}
                </ul>
              </aside>
            </div>
          </PostCT>
        ) : (
          <></>
        )}
      </Layout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const queryClient = getQueryClient;
  if (ctx.params?.slug) {
    const slug = ctx.params.slug as string;
    await queryClient.prefetchQuery(postKeys.detail(slug), db.post.getDetail(slug));
  }
  return {
    props: {
      dehydratedQuery: dehydrate(queryClient),
    },
  };
};
