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
      <div className="thumb">
        <img
          src="data:image/jpeg;base64,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"
          alt=""
        />
      </div>
      <div className="article">
        <h2>바삭하게 튀기듯 부쳐진 감자전을 나는 좋아해요 나는 좋아해요asdasdASDASD</h2>
        <p className="summary">
          We&apos;ve crammed the most important information to help you get started with
          Ghost into this one post. It&apos;s your cheat-sheet to get started, and your
          shortcut to advanced features.
        </p>
        <PublishInfo.Combine />
      </div>
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
