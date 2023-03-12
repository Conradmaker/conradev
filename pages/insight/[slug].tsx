import Layout from 'components/common/Layout';
import React from 'react';
import { HiOutlineCalendar, HiOutlineClock } from 'react-icons/hi';
import { InsightPostPage } from '../../styles/postStyles';
import MdView from 'components/Post/MdView';
import { postQ } from 'modules/query/post';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';

export default function Post() {
  const { query } = useRouter();
  const { data } = postQ.getPostDetail((query.slug as string) || '');

  return (
    <Layout>
      {data ? (
        <InsightPostPage>
          <div className="inner">
            <h1 className="title">{data?.title}</h1>
            <ul className="detail">
              <li>
                <HiOutlineClock />
                <span>{data?.read_time || 0}분 분량</span>
              </li>
              <li>
                <HiOutlineCalendar />
                <span>{dayjs(data?.published_at).format('YYYY년 MM월 DD일')}</span>
              </li>
            </ul>
            <img
              src={data?.cover_horizontal || ''}
              alt={data?.title || ''}
              className="thumb"
            />
          </div>
          <div className="viewer">
            <aside />
            <MdView type="insight" content={data?.content || ''} />
          </div>
        </InsightPostPage>
      ) : (
        <></>
      )}
    </Layout>
  );
}
