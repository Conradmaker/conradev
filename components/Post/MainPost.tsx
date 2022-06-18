import React from 'react';
import PostSummary from './PostSummary';
import PublishInfo from './PublishInfo';
import { MainPostCT } from './styles';

export default function MainPost() {
  return (
    <MainPostCT>
      <div className="inner">
        <div className="date">
          LATEST - <PublishInfo.Date />
        </div>
        <PostSummary.Large />
        <PublishInfo.ReadCnt />
      </div>
    </MainPostCT>
  );
}
