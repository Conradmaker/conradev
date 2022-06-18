import type { NextPage } from 'next';
import Divider from '../components/common/Divider';
import PostSummary from '../components/Post/PostSummary';
import MainPost from '../components/Post/MainPost';
import { MainPage } from './styles';
import AboutMe from '../components/Main/AboutMe';
import Topic from '../components/Main/Topic';
import Layout from '../components/common/Layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <MainPage className="inner">
        <MainPost />
        <div className="bottom_section">
          <div className="left">
            <Divider label="MORE POSTS" />
            <ul>
              <PostSummary.Normal />
              <PostSummary.Normal />
              <PostSummary.Normal />
            </ul>
          </div>
          <aside className="right">
            <Divider label="ABOUT" />
            <AboutMe />
            <Divider label="FEATURED" />
            <PostSummary.Small />
            <PostSummary.Small />
            <Divider label="TOPICS" />
            <Topic />
            <Topic />
            <Topic />
          </aside>
        </div>
      </MainPage>
    </Layout>
  );
};

export default Home;
