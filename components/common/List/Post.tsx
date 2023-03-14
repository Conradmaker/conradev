import dayjs from 'dayjs';
import { Post } from 'modules/query/types';
import Link from 'next/link';
import React from 'react';
import { HiOutlineCalendar, HiOutlineClock } from 'react-icons/hi';
import { PostItemBox } from './styles';

type PostItemProps = {
  data: Post;
};
export default function PostItem({ data }: PostItemProps) {
  return (
    <Link href={`/dev/${data.slug}`} title={data.title || ''}>
      <PostItemBox className="post_summary">
        <div className="article">
          <h2>{data.title}</h2>
          <p className="summary">{data.description}</p>
          <div className="info">
            <ul className="tag_list">
              {data.categories?.map(v => (
                <li className="tag" key={v.id}>
                  {v.name}
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
        </div>
      </PostItemBox>
    </Link>
  );
}
