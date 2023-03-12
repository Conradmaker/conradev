import dayjs from 'dayjs';
import { Post } from 'modules/query/types';
import Link from 'next/link';
import React from 'react';
import { VerticalCardBox } from './styles';

type VerticalCardProps = {
  data: Post;
};
export default function VerticalCard({ data }: VerticalCardProps) {
  return (
    <Link href={`/insight/${data.slug}`}>
      <VerticalCardBox>
        <img
          alt=""
          className="card_bg"
          src={data.cover_vertical || data.cover_horizontal || ''}
        />
        <div className="content">
          <span className="tag">테크</span>
          <h3>
            반도체의&nbsp;제왕<div className="br"></div> 인텔은&nbsp;왜&nbsp;몰락하는가
          </h3>
          <p className="date">{dayjs(data.published_at).format('YYYY.MM.DD')}</p>
        </div>
      </VerticalCardBox>
    </Link>
  );
}
