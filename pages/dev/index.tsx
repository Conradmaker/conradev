import Layout from 'components/common/Layout';
import PostItem from 'components/common/List/Post';
import { DevPage } from 'styles/mainStyles';
import React from 'react';
import { FcCommandLine } from 'react-icons/fc';

export default function index() {
  return (
    <Layout>
      <DevPage className="inner">
        <div className="head">
          <div>
            <h1>
              개발 포스트
              <FcCommandLine />
            </h1>
          </div>
          <p>본업을 살면서 느끼고 배운 것들</p>
        </div>
        <div className="content">
          <ul>
            <li>
              <PostItem />
            </li>
            <li>
              <PostItem />
            </li>
            <li>
              <PostItem />
            </li>
            <li>
              <PostItem />
            </li>
          </ul>
          <aside>
            <div className="inner">
              <p>토픽</p>
              <ul>
                <li>
                  <p>프론트엔드</p>
                  <span>23</span>
                </li>
                <li>
                  <p>백엔드</p>
                  <span>13</span>
                </li>
                <li>
                  <p>NEXTJS</p>
                  <span>12</span>
                </li>
                <li>
                  <p>MYSQL</p>
                  <span>3</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </DevPage>
    </Layout>
  );
}
