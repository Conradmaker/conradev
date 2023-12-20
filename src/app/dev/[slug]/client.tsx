'use client';
import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import Link from 'next/link';
import React from 'react';
import { HiOutlineCalendar, HiOutlineClock } from 'react-icons/hi';
import MdView from 'src/components/Post/MdView';
// import useHeadAnchor from 'src/hooks/useHeadAnchor';
import { postDetailFetcher, postKeys } from 'src/modules/query/post';
import { PostCT } from 'src/styles/postStyles';

export default function DevPostDetail({ slug }: { slug: string }) {
  const { data } = useQuery({
    queryKey: postKeys.detail(slug),
    queryFn: postDetailFetcher,
  });
  //   const { idList } = useHeadAnchor([data?.content]);
  return (
    <>
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
              {/* <ul>
                {idList.map(v => (
                  <HeadingAnchor data={v} key={v.idx} />
                ))}
              </ul> */}
            </aside>
          </div>
        </PostCT>
      ) : (
        <></>
      )}
    </>
  );
}
