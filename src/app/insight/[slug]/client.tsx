'use client';
import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import Link from 'next/link';
import React from 'react';
import { HiOutlineCalendar, HiOutlineClock } from 'react-icons/hi';
import MetaHead from 'src/components/common/MetaHead';
import MdView from 'src/components/Post/MdView';
import { postDetailFetcher, postKeys } from 'src/modules/query/post';
import { InsightPostPage } from 'src/styles/postStyles';

export default function InsightPostDetail({ slug }: { slug: string }) {
  const { data } = useQuery({
    queryKey: postKeys.detail(slug),
    queryFn: postDetailFetcher,
  });
  return (
    <>
      <MetaHead data={data} />
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
    </>
  );
}
