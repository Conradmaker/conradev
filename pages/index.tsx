import type { NextPage } from 'next';
import Divider from '../components/common/Divider';
import Header from '../components/common/Header';
import Navigation from '../components/common/Navigation';
import PostSummary from '../components/Post/PostSummary';
import MainPost from '../components/Post/MainPost';
import { MainPage } from './styles';
import AboutMe from '../components/Main/AboutMe';
import Topic from '../components/Main/Topic';
import Footer from '../components/common/Footer';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <MainPage className="inner">
        <Navigation />
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
      <Footer />
    </>
  );
};

export default Home;
