import { DiscussionEmbed } from 'disqus-react';
import { useRouter } from 'next/router';
import React from 'react';
import { CommentCT } from './styles';

export default function Comment() {
  const route = useRouter();
  return (
    <CommentCT>
      <DiscussionEmbed
        shortname="conradev-me"
        config={{
          url: 'https://conradev.me',
          identifier: (route.query.id as string) || 'null',
          title: '123123123',
          language: 'ko', //e.g. for Traditional Chinese (Taiwan)
        }}
      />
    </CommentCT>
  );
}
