import type { NextPage } from 'next';
import Divider from '../components/common/Divider';
import PostSummary from '../components/Post/PostSummary';
import MainPost from '../components/Post/MainPost';
import { MainPage } from './styles';
import Topic from '../components/Main/Topic';
import Layout from '../components/common/Layout';
import { topicMocks } from 'data/mocks/topics';

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
              <PostSummary.Normal />
              <PostSummary.Normal />
              <PostSummary.Normal />
              <PostSummary.Normal />
              <PostSummary.Normal />
              <PostSummary.Normal />
              <PostSummary.Normal />
              <PostSummary.Normal />
            </ul>
          </div>
          <aside className="right">
            <Divider label="TOPICS" />
            <ul className="topics">
              {topicMocks.map(v => (
                <Topic data={v} key={v.id} />
              ))}
            </ul>
            {/* <Divider label="ABOUT" /> */}
            {/* <AboutMe /> */}
            <Divider label="FEATURED" />
            <ul className="feature_post">
              <PostSummary.Small />
              <PostSummary.Small />
            </ul>
          </aside>
        </div>
      </MainPage>
    </Layout>
  );
};

export default Home;
