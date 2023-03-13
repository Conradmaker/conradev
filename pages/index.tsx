import type { NextPage } from 'next';
import { MainPage } from '../styles/mainStyles';
import Layout from '../components/common/Layout';
import ArticleList from 'components/Main/ArticleList';
import DevPostList from 'components/Main/DevPostList';
import MetaHead from 'components/common/MetaHead';

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

export default Home;
