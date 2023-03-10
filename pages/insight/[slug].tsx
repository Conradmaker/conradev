/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import Layout from 'components/common/Layout';
import React, { useEffect, useState } from 'react';
import { HiOutlineCalendar, HiOutlineClock } from 'react-icons/hi';
import { InsightPostPage } from '../../styles/postStyles';
import MdView from 'components/Post/MdView';

export default function Post() {
  const [content, setContent] = useState<any>('');
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_SERVER_HOST}/api/posts/3?populate=*`)
      .then(res => setContent(res.data));
  }, []);
  console.log(content);

  return (
    <Layout>
      <InsightPostPage>
        <div className="inner">
          <h1 className="title">{content?.data?.attributes.title}</h1>
          <ul className="detail">
            <li>
              <HiOutlineClock />
              <span>13분 분량</span>
            </li>
            <li>
              <HiOutlineCalendar />
              <span>2023년 03월 03일</span>
            </li>
          </ul>
          <img
            src={'https://cdn.mos.cms.futurecdn.net/aQ7bQjtQeboY72LkAQuAPo.jpg'}
            alt="s"
            className="thumb"
          />
        </div>
        <div className="viewer">
          <aside />
          <MdView
            type="insight"
            content={content?.data?.attributes.blocks[0].body || ''}
          />
        </div>
      </InsightPostPage>
    </Layout>
  );
}
