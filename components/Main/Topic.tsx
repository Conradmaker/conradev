import React from 'react';
import { TopicItem } from './styles';

type TopicProps = {
  data: {
    id: number;
    name: string;
    cnt: number;
  };
};
export default function Topic({ data }: TopicProps) {
  return (
    <TopicItem className="active">
      <p># {data.name}</p>
      <small>{data.cnt}</small>
    </TopicItem>
  );
}
