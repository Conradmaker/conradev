import type { GetServerSideProps, NextPage } from 'next';
import { MainPage } from '../styles/mainStyles';
import Layout from '../components/common/Layout';
import ArticleList from 'components/Main/ArticleList';
import DevPostList from 'components/Main/DevPostList';
import MetaHead from 'components/common/MetaHead';
import getQueryClient from 'modules/query/queryClient';
import { categoryKeys } from 'modules/query/category';
import { db } from 'libs/db';
import { dehydrate } from '@tanstack/react-query';
import { postKeys } from 'modules/query/post';

const Home: NextPage = () => {
  return (
    <Layout>
      <MainPage className="inner">
        <MetaHead.Default title="포스트" url="https://www.conradev.me/" />
        <ArticleList />
        <DevPostList />
      </MainPage>
    </Layout>
  );
};
export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = getQueryClient;
  await Promise.allSettled([
    queryClient.prefetchQuery(categoryKeys.listFilter(), db.category.getList()),
    queryClient.prefetchQuery(
      postKeys.listFilter({ type: 'insight', limit: 4, page: 1 }),
      db.post.getList({ type: 'insight', limit: 4, page: 1 })
    ),
    queryClient.prefetchQuery(
      postKeys.listFilter({ type: 'dev', limit: 12, page: 1 }),
      db.post.getList({ type: 'dev', limit: 12, page: 1 })
    ),
  ]);
  return {
    props: {
      dehydratedQuery: dehydrate(queryClient),
    },
  };
};

export default Home;
