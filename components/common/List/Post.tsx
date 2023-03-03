import Link from 'next/link';
import React from 'react';
import { HiOutlineCalendar, HiOutlineClock } from 'react-icons/hi';
import { PostItemBox } from './styles';

export default function PostItem() {
  return (
    <Link href={`/post/${3}`}>
      <PostItemBox className="post_summary">
        <div className="article">
          <h2>주니어 개발자의 성장에 대하여 chap.1</h2>
          <p className="summary">
            오래오래 성장할 수 있는 질긴 개발자가 되기 위한 방법중 목표를 효율적으로
            정하고, 동기부여를 얻기 위한 방법에 대해 정리한 글입니다.
          </p>
          <div className="info">
            <ul className="tag_list">
              <li className="tag">NEXTJS</li>
              <li className="tag">MYSQL</li>
              <li className="tag">Nextjs</li>
              <li className="tag">프론트엔드</li>
            </ul>
            <ul className="detail">
              <li>
                <HiOutlineClock />
                <span>13분 분량</span>
              </li>
              <li>
                <HiOutlineCalendar />
                <span>2023년 03월 03일</span>
              </li>
            </ul>
          </div>
        </div>
      </PostItemBox>
    </Link>
  );
}
