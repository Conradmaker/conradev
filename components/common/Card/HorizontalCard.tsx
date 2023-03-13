import dayjs from 'dayjs';
import { Post } from 'modules/query/types';
import Link from 'next/link';
import React from 'react';
import { HorizontalCardBox } from './styles';

type HorizontalCardProps = {
  data: Post;
};
export default function HorizontalCard({ data }: HorizontalCardProps) {
  return (
    <Link href={`/dev/${data.slug}`}>
      <HorizontalCardBox>
        <img
          alt={data.title || ''}
          title={data.title || ''}
          className="card_bg"
          src={data.cover_horizontal || ''}
        />
        <div className="content">
          <p className="date">{dayjs(data.published_at).format('YYYY.MM.DD')}</p>
          <h3>
            {data.title}
            {/* 반도체의&nbsp;제왕<div className="br"></div> 인텔은&nbsp;왜&nbsp;몰락하는가 */}
          </h3>
          <ul className="tag_list">
            {data.categories?.map(v => (
              <li className="tag" key={v.id}>
                {v.name}
              </li>
            ))}
          </ul>
        </div>
      </HorizontalCardBox>
    </Link>
  );
}
