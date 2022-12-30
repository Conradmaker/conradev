import Layout from 'components/common/Layout';
import PostSummary from 'components/Post/PostSummary';
import { SeriesDetailPage } from 'pages/styles';
import React from 'react';

export default function SeriesDetail() {
  return (
    <Layout>
      <SeriesDetailPage className="inner">
        <aside>
          <p>SERIES</p>
          <h1>시리즈1</h1>
          <span>12개의 포스트</span>
        </aside>
        <ul>
          <li>
            <PostSummary.Normal />
          </li>
          <li>
            <PostSummary.Normal />
          </li>
          <li>
            <PostSummary.Normal />
          </li>
          <li>
            <PostSummary.Normal />
          </li>
          <li>
            <PostSummary.Normal />
          </li>
          <li>
            <PostSummary.Normal />
          </li>
          <li>
            <PostSummary.Normal />
          </li>
          <li>
            <PostSummary.Normal />
          </li>
          <li>
            <PostSummary.Normal />
          </li>
        </ul>
        {/* <aside></aside> */}
      </SeriesDetailPage>
    </Layout>
  );
}
