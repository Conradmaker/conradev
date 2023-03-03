import VerticalCard from 'components/common/Card/VerticalCard';
import React from 'react';
import { ArticleListCT } from './styles';
import { FcIdea } from 'react-icons/fc';

export default function ArticleList() {
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
        <li>
          <VerticalCard />
        </li>
        <li>
          <VerticalCard />
        </li>
        <li>
          <VerticalCard />
        </li>
        <li>
          <VerticalCard />
        </li>
      </ul>
    </ArticleListCT>
  );
}
