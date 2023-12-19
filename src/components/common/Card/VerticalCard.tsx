import dayjs from 'dayjs';
import { Post } from 'src/modules/query/types';
import Link from 'next/link';
import React from 'react';
import { VerticalCardBox } from './styles';

type VerticalCardProps = {
  data: Post;
};
export default function VerticalCard({ data }: VerticalCardProps) {
  return (
    <Link href={`/insight/${data.slug}`} title={data.title || ''}>
      <VerticalCardBox>
        <img
          alt={data.title || ''}
          title={data.title || ''}
          className="card_bg"
          src={data.cover_vertical || data.cover_horizontal || ''}
        />
        <div className="content">
          <span className="tag">
            {data.categories?.length ? data.categories[0]?.name : ''}
          </span>
          <h3>
            {data.title}
            {/* 반도체의&nbsp;제왕<div className="br"></div> 인텔은&nbsp;왜&nbsp;몰락하는가 */}
          </h3>
          <p className="date">{dayjs(data.published_at).format('YYYY.MM.DD')}</p>
        </div>
      </VerticalCardBox>
    </Link>
  );
}
