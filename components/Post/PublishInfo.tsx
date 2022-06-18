import React from 'react';
import { PostDateSpan, PostPublishInfoBox, PostReadCntSpan } from './styles';

function PostDate() {
  return <PostDateSpan className="post_date">JUN 28, 2022</PostDateSpan>;
}
function PostReadCount() {
  return <PostReadCntSpan className="post_read_count">22 MIN READ</PostReadCntSpan>;
}
function PublishInfo() {
  return (
    <PostPublishInfoBox className="publish_info">
      <PostDate />
      <div className="line"></div>
      <PostReadCount />
    </PostPublishInfoBox>
  );
}
PublishInfo.Date = PostDate;
PublishInfo.ReadCnt = PostReadCount;
PublishInfo.Combine = PublishInfo;
export default PublishInfo;
