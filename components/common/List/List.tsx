import dayjs from 'dayjs';
import { Post } from 'modules/query/types';
import Link from 'next/link';
import React from 'react';
import { SimpleListItem } from './styles';

type ListItemProps = {
  data: Post;
};
export default function ListItem({ data }: ListItemProps) {
  return (
    <SimpleListItem>
      <Link href={`/insight/${data.slug}`}>
        <article>
          <h2>
            {data.title}
            {/* 반도체의&nbsp;제왕<div className="br"></div> 인텔은&nbsp;왜&nbsp;몰락하는가 */}
          </h2>
          <p>
            <span className="date">
              {dayjs(data.published_at).format('YYYY년 MM월 DD일')}
            </span>
            <div className="dot"></div>
            <span className="cnt">{data.read_time}분 분량</span>
          </p>
        </article>
        <div className="img_wrapper">
          <img
            src={data.cover_horizontal || ''}
            alt={data.title || ''}
            title={data.title || ''}
          />
        </div>
      </Link>
    </SimpleListItem>
  );
}
