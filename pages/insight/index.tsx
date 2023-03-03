import Layout from 'components/common/Layout';
import ListItem from 'components/common/List/List';
import { InsightPage } from 'pages/styles';
import React from 'react';
import { FcIdea } from 'react-icons/fc';

export default function Insight() {
  return (
    <Layout>
      <InsightPage className="inner">
        <div className="head">
          <div>
            <h1>
              인사이트
              <FcIdea />
            </h1>
          </div>
          <p>주관적인 시점으로 세상을 바라보는 글</p>
        </div>
        <div className="content">
          <ul>
            <li>
              <ListItem />
            </li>
            <li>
              <ListItem />
            </li>
            <li>
              <ListItem />
            </li>
            <li>
              <ListItem />
            </li>
          </ul>
        </div>
      </InsightPage>
    </Layout>
  );
}
