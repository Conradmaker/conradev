import type { NextPage } from 'next';
import { MainPage } from '../styles/mainStyles';
import Layout from '../components/common/Layout';
import ArticleList from 'components/Main/ArticleList';
import DevPostList from 'components/Main/DevPostList';

const Home: NextPage = () => {
  return (
    <Layout>
      <MainPage className="inner">
        <ArticleList />
        <DevPostList />
      </MainPage>
    </Layout>
  );
};

export default Home;
