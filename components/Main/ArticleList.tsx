import VerticalCard from 'components/common/Card/VerticalCard';
import React from 'react';
import { ArticleListCT } from './styles';
import { FcIdea } from 'react-icons/fc';
import { postQ } from 'modules/query/post';

export default function ArticleList() {
  const { data: insights } = postQ.getPostList({ type: 'insight', limit: 4, page: 1 });
  return (
    <ArticleListCT>
      <h2>
        가볍게 읽을 수 있는
        <strong>
          인사이트
          <FcIdea />
        </strong>
      </h2>
      <ul>
        {insights?.map(insight => (
          <li key={insight.id}>
            <VerticalCard data={insight} />
          </li>
        ))}
      </ul>
    </ArticleListCT>
  );
}
