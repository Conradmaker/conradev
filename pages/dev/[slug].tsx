/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Layout from '../../components/common/Layout';
import { PostCT } from '../../styles/postStyles';
import HeadingAnchor from 'components/Post/HeadingAnchor';
import useHeadAnchor from 'hooks/useHeadAnchor';
import { HiOutlineCalendar, HiOutlineClock } from 'react-icons/hi';
import MdView from 'components/Post/MdView';

export default function Post() {
  const [content, setContent] = useState<any>('');
  const { idList } = useHeadAnchor([content]);
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_SERVER_HOST}/api/posts/3?populate=*`)
      .then(res => setContent(res.data));
  }, []);
  console.log(content);

  return (
    <Layout>
      <PostCT>
        <div className="inner">
          <h1 className="title">{content?.data?.attributes.title}</h1>
          <div className="info">
            <ul className="category_list">
              {content?.data?.attributes?.categories?.data.map((v: any, idx: any) => (
                <li key={idx}>{v.attributes.name}</li>
              ))}
            </ul>
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
          </div>
          <img
            src={
              process.env.NEXT_PUBLIC_SERVER_HOST +
              content?.data?.attributes?.cover.data.attributes.url
            }
            alt="s"
            className="thumb"
          />
        </div>
        <div className="viewer">
          <aside />
          <MdView type="dev" content={content?.data?.attributes.blocks[0].body || ''} />
          <aside>
            <ul>
              {idList.map(v => (
                <HeadingAnchor data={v} key={v.idx} />
              ))}
            </ul>
          </aside>
        </div>
      </PostCT>
    </Layout>
  );
}
