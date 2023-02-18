import Layout from 'components/common/Layout';
import SeriesCard from 'components/Series/SeriesCard';
import { SeriesPage } from 'pages/styles';
import React from 'react';

export default function index() {
  return (
    <Layout>
      <SeriesPage className="inner">
        <div className="content">
          <aside>
            <h1>시리즈</h1>
            <div className="topics">
              <strong>TOPICS</strong>
              <ul>
                <li className="active">ALL</li>
                <li># React</li>
                <li># Vue</li>
                <li># React</li>
                <li># React</li>
              </ul>
            </div>
          </aside>
          <ul>
            {Array.from({ length: 12 }).map((v, i) => (
              <li key={i}>
                <SeriesCard />
              </li>
            ))}
          </ul>
        </div>
      </SeriesPage>
    </Layout>
  );
}
