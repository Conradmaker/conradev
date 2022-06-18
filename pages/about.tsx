import React from 'react';
import Layout from '../components/common/Layout';
import { AboutPage } from './styles';

export default function about() {
  return (
    <Layout>
      <AboutPage className="inner">
        <h1>이런 말이 있습니다.</h1>
        <h1>
          훌륭한 개발팀 없이<small>Jim McCarthy</small> <br /> 훌륭한 소프트웨어를 만들
          수는 없다.
        </h1>
        <h1>여러분은 훌륭한 개발팀을 만들고 계신가요?</h1>
      </AboutPage>
    </Layout>
  );
}
