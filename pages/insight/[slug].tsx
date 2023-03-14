import Layout from 'components/common/Layout';
import React from 'react';
import { HiOutlineCalendar, HiOutlineClock } from 'react-icons/hi';
import { InsightPostPage } from '../../styles/postStyles';
import MdView from 'components/Post/MdView';
import { postKeys, postQ } from 'modules/query/post';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import getQueryClient from 'modules/query/queryClient';
import { db } from 'libs/db';
import { dehydrate } from '@tanstack/react-query';
import MetaHead from 'components/common/MetaHead';
import Link from 'next/link';

export default function Post() {
  const { query } = useRouter();
  const { data } = postQ.getPostDetail((query.slug as string) || '');

  return (
    <>
      <MetaHead data={data} />
      <Layout>
        {data ? (
          <InsightPostPage>
            <div className="inner">
              <ul className="category">
                {data?.categories?.map((v, idx) => (
                  <li key={idx}>
                    <Link href={`/category/${v.slug}`} title={v.name}>
                      # {v.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <h1 className="title">{data?.title}</h1>
              <ul className="detail">
                <li>
                  <HiOutlineClock />
                  <span>{data?.read_time || 0}분 분량</span>
                </li>
                <li>
                  <HiOutlineCalendar />
                  <span>{dayjs(data?.published_at).format('YYYY년 MM월 DD일')}</span>
                </li>
              </ul>
              <img
                src={data?.cover_horizontal || ''}
                alt={data?.title || ''}
                title={data?.title || ''}
                className="thumb"
              />
            </div>
            <div className="viewer">
              <aside />
              <MdView type="insight" content={data?.content || ''} />
            </div>
          </InsightPostPage>
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
