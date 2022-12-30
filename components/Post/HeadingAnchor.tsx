import React from 'react';
import { HeadingAnchorBox } from './styles';

type HeadingAnchorProps = {
  data: { idx: number; level: number; id: string };
};

export default function HeadingAnchor({ data }: HeadingAnchorProps) {
  return (
    <HeadingAnchorBox href={`#${data.id}`} className={`heading_${data.level}`}>
      {data.id.replaceAll('-', ' ')}
    </HeadingAnchorBox>
  );
}
