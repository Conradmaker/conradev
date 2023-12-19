import React from 'react';
import { HeadingAnchorBox } from './styles';

type HeadingAnchorProps = {
  data: { idx: number; level: number; id: string; offset: number; active: boolean };
};

export default function HeadingAnchor({ data }: HeadingAnchorProps) {
  const onClickAnchor = () => {
    window.scrollTo({ top: data.offset, behavior: 'smooth' });
  };

  return (
    <HeadingAnchorBox
      onClick={onClickAnchor}
      className={data.active ? `heading_${data.level} active` : `heading_${data.level}`}
    >
      {data.id.replaceAll('-', ' ')}
    </HeadingAnchorBox>
  );
}
