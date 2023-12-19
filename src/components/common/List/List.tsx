import dayjs from 'dayjs';
import { Post } from 'src/modules/query/types';
import Link from 'next/link';
import React from 'react';
import { SimpleListItem } from './styles';

type ListItemProps = {
  data: Post;
};
export default function ListItem({ data }: ListItemProps) {
  return (
    <SimpleListItem>
      <Link
        href={`/${data.type === 1 ? 'insight' : 'dev'}/${data.slug}`}
        title={data.title || ''}
      >
        <article>
          <ul>
            {data.categories?.map((cate, idx) =>
              idx < 3 ? (
                <li key={cate.slug}>
                  <Link href={`/category/${cate.slug}`} title={cate.name || ''}>
                    # {cate.name}
                  </Link>
                </li>
              ) : null
            )}
          </ul>
          <h2>{data.title}</h2>
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
