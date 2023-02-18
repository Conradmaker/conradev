import Link from 'next/link';
import React from 'react';
import {
  PostDateSpan,
  PostPublishInfoBox,
  PostReadCntSpan,
  PostSeriesAnchor,
} from './styles';

function PostDate() {
  return <PostDateSpan className="post_date">2022년 12월 31일</PostDateSpan>;
}
function PostReadCount() {
  return <PostReadCntSpan className="post_read_count">22 MIN READ</PostReadCntSpan>;
}
function PostSeries() {
  return (
    <Link href="/">
      <PostSeriesAnchor className="post_series">
        IN <strong>SERIES</strong>
      </PostSeriesAnchor>
    </Link>
  );
}
function PublishInfo() {
  return (
    <PostPublishInfoBox className="publish_info">
      <div>
        <PostDate />
        <div className="line"></div>
        <PostReadCount />
      </div>
      <PostSeries />
    </PostPublishInfoBox>
  );
}
PublishInfo.Date = PostDate;
PublishInfo.ReadCnt = PostReadCount;
PublishInfo.Combine = PublishInfo;
PublishInfo.Series = PostSeries;
export default PublishInfo;
