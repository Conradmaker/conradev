/* eslint-disable @next/next/no-img-element */
import Pill from 'components/common/Pill';
import Link from 'next/link';
import React from 'react';
import { SeriesCardBox } from './styles';

export default function SeriesCard() {
  return (
    <SeriesCardBox>
      <Link href="/series/1">
        <div className="thumb_box">
          <img src="https://blog.cyan4s.com/assets/posts/nextjs-learn.jpg" alt="" />
        </div>

        <article>
          <h2>가나다라</h2>
          <p>
            디스크립션 description 이글은 어쩌고 저쩌고 이글은 어쩌고 저쩌고description{' '}
          </p>
          <span>12 POSTS</span>
        </article>
        <ul>
          <li>
            <Pill />
          </li>
          <li>
            <Pill />
          </li>
          <li>
            <Pill />
          </li>
        </ul>
      </Link>
    </SeriesCardBox>
  );
}
