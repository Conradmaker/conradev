'use client';
import { MainPage } from '../styles/mainStyles';
import ArticleList from 'src/components/Main/ArticleList';
import DevPostList from 'src/components/Main/DevPostList';
import MetaHead from 'src/components/common/MetaHead';
// import getQueryClient from 'src/modules/query/queryClient';
// import { categoryKeys } from 'src/modules/query/category';
// import { db } from 'src/libs/db';
// import { dehydrate } from '@tanstack/react-query';
// import { postKeys } from 'src/modules/query/post';
// import type { GetServerSideProps, NextPage } from 'next';

function Home() {
  return (
    <>
      <MetaHead.Default />
      <MainPage className="inner">
        <MetaHead.Default title="포스트" url="https://www.conradev.me/" />
        <ArticleList />
        <DevPostList />
      </MainPage>
    </>
  );
}

// export const getServerSideProps: GetServerSideProps = async () => {
//   const queryClient = getQueryClient;
//   await Promise.allSettled([
//     queryClient.prefetchQuery(categoryKeys.listFilter(), db.category.getList()),
//     queryClient.prefetchQuery(
//       postKeys.listFilter({ type: 'insight', limit: 4, page: 1 }),
//       db.post.getList({ type: 'insight', limit: 4, page: 1 })
//     ),
//     queryClient.prefetchQuery(
//       postKeys.listFilter({ type: 'dev', limit: 12, page: 1 }),
//       db.post.getList({ type: 'dev', limit: 12, page: 1 })
//     ),
//   ]);
//   return {
//     props: {
//       dehydratedQuery: dehydrate(queryClient),
//     },
//   };
// };

export default Home;
