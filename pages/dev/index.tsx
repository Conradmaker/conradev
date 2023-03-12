import Layout from 'components/common/Layout';
import PostItem from 'components/common/List/Post';
import { DevPage } from 'styles/mainStyles';
import React from 'react';
import { FcCommandLine } from 'react-icons/fc';
import { postQ } from 'modules/query/post';
import { categoryQ } from 'modules/query/category';

export default function index() {
  const { data: posts } = postQ.getPostList({ type: 'dev' });
  const { data: categories } = categoryQ.getCategoryList();
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
            {posts?.map(post => (
              <li key={post.id}>
                <PostItem data={post} />
              </li>
            ))}
          </ul>
          <aside>
            <div className="inner">
              <p>토픽</p>
              <ul>
                {categories?.map(category =>
                  category.count ? (
                    <li key={category.id}>
                      <p>{category.name}</p>
                      <span>{category.count}</span>
                    </li>
                  ) : null
                )}
              </ul>
            </div>
          </aside>
        </div>
      </DevPage>
    </Layout>
  );
}
