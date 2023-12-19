'use client';
import React from 'react';
import { PostCT } from 'src/styles/postStyles';
import HeadingAnchor from 'src/components/Post/HeadingAnchor';
import useHeadAnchor from 'src/hooks/useHeadAnchor';
import { HiOutlineCalendar, HiOutlineClock } from 'react-icons/hi';
import MdView from 'src/components/Post/MdView';
import { postQ } from 'src/modules/query/post';
// import getQueryClient from 'src/modules/query/queryClient';
// import { dehydrate } from '@tanstack/react-query';
// import { GetServerSideProps } from 'next';
// import { db } from 'src/libs/db';
import MetaHead from 'src/components/common/MetaHead';
import Link from 'next/link';
import dayjs from 'dayjs';

export default function Post({ params }: { params: { slug: string } }) {
  const { data } = postQ.getPostDetail((params.slug as string) || '');
  const { idList } = useHeadAnchor([data?.content]);

  return (
    <>
      <MetaHead data={data} />
      {data ? (
        <PostCT>
          <div className="inner">
            <h1 className="title">{data.title}</h1>
            <div className="info">
              <ul className="category_list">
                {data.categories?.map((v, idx) => (
                  <li key={idx}>
                    <Link href={`/category/${v.slug}`} title={v.name}>
                      {v.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="detail">
                <li>
                  <HiOutlineClock />
                  <span>{data.read_time}분 분량</span>
                </li>
                <li>
                  <HiOutlineCalendar />
                  <span>{dayjs(data.published_at).format('YYYY년 MM월 DD일')}</span>
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
    </>
  );
}

// export const getServerSideProps: GetServerSideProps = async ctx => {
//   const queryClient = getQueryClient;
//   if (ctx.params?.slug) {
//     const slug = ctx.params.slug as string;
//     await queryClient.prefetchQuery(postKeys.detail(slug), db.post.getDetail(slug));
//   }
//   return {
//     props: {
//       dehydratedQuery: dehydrate(queryClient),
//     },
//   };
// };
