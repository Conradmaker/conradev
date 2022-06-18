import React from 'react';
import PublishInfo from './PublishInfo';
import { PostSummaryBig, PostSummaryNormal, PostSummarySmall } from './styles';

function BigPostSummary() {
  return (
    <PostSummaryBig className="post_summary post_summary__big">
      <h1>바삭하게 튀기듯 부쳐진 감자전을 나는 좋아해요 나는 좋아해요asdasdASDASD</h1>
      <p className="summary">
        We&apos;ve crammed the most important information to help you get started with
        Ghost into this one post. It&apos;s your cheat-sheet to get started, and your
        shortcut to advanced features.
      </p>
    </PostSummaryBig>
  );
}
function NormalPostSummary() {
  return (
    <PostSummaryNormal className="post_summary post_summary__normal">
      <h2>바삭하게 튀기듯 부쳐진 감자전을 나는 좋아해요 나는 좋아해요asdasdASDASD</h2>
      <p className="summary">
        We&apos;ve crammed the most important information to help you get started with
        Ghost into this one post. It&apos;s your cheat-sheet to get started, and your
        shortcut to advanced features.
      </p>
      <PublishInfo.Combine />
    </PostSummaryNormal>
  );
}
function SmallPostSummary() {
  return (
    <PostSummarySmall className="post_summary post_summary__small">
      <h3>바삭하게 튀기듯 부쳐진 감자전을 나는 좋아해요 나는 좋아해요asdasdASDASD</h3>
      <p className="summary">
        We&apos;ve crammed the most important information to help you get started with
        Ghost into.
      </p>
      <PublishInfo.Combine />
    </PostSummarySmall>
  );
}

function PostSummary() {
  return <></>;
}
PostSummary.Large = BigPostSummary;
PostSummary.Normal = NormalPostSummary;
PostSummary.Small = SmallPostSummary;
export default PostSummary;
