'use client';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import React from 'react';
import { FcCommandLine } from 'react-icons/fc';
import PostItem from 'src/components/common/List/Post';
import { categoryKeys, categoryListFetcher } from 'src/modules/query/category';
import { postKeys, postListFetcher } from 'src/modules/query/post';
import { DevPage } from 'src/styles/mainStyles';

export default function DevPostList() {
  const { data: posts } = useQuery({
    queryKey: postKeys.list({ type: 'dev' }),
    queryFn: postListFetcher,
  });
  const { data: categories } = useQuery({
    queryKey: categoryKeys.list({ type: 'dev' }),
    queryFn: categoryListFetcher,
  });
  return (
    <>
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
                      <Link
                        href={`/category/${category.slug}`}
                        title={category.name || ''}
                      >
                        <p>{category.name}</p>
                        <span>{category.count}</span>
                      </Link>
                    </li>
                  ) : null
                )}
              </ul>
            </div>
          </aside>
        </div>
      </DevPage>
    </>
  );
}
