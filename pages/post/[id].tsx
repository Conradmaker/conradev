/* eslint-disable @next/next/no-img-element */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import {
  Prism as SyntaxHighlighter,
  SyntaxHighlighterProps,
} from 'react-syntax-highlighter';
import rehypeSlug from 'rehype-slug';
import { nord } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import Layout from '../../components/common/Layout';
import { PostCT } from './styles';
import PostSummary from 'components/Post/PostSummary';
import Comment from 'components/Post/Comment';
import Link from 'next/link';
import HeadingAnchor from 'components/Post/HeadingAnchor';

const CodeBlock = {
  code({ inline, className, children, ...props }: SyntaxHighlighterProps) {
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
      <SyntaxHighlighter style={nord} language={match[1]} PreTag="div" {...props}>
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
};

export default function Post() {
  const [content, setContent] = useState('');
  const [idList, setIdList] = useState<{ idx: number; level: number; id: string }[]>([]);
  useEffect(() => {
    axios
      .get('https://b7093273-9a06-4130-a5c4-3156058b6f5d.mock.pstmn.io/md/1')
      .then(res => setContent(res.data));
  }, []);
  useEffect(() => {
    const list = document.querySelector('.markdown_view');
    const arr = list?.querySelectorAll(
      'h1,h2,h3,h4,h5'
    ) as NodeListOf<HTMLHeadingElement>;
    if (arr) {
      let res: { idx: number; level: number; id: string }[] = [];
      arr.forEach((v, i) => {
        res = [...res, { idx: i, level: +v.tagName.charAt(1), id: v.id }];
      });
      setIdList(res);
    }
  }, [content]);
  return (
    <Layout>
      <PostCT>
        <div className="inner">
          <div className="info">
            <Link href="/">
              IN <strong>시리즈</strong> —&nbsp;
            </Link>
            <span>JUN 28, 2022</span>
          </div>
          <PostSummary.Large />
          <img
            src="https://reboot.studio/blog/content/images/2021/02/react-folder-structure-1.png"
            alt="s"
            className="thumb"
          />
        </div>
        <div className="viewer">
          <aside />
          <ReactMarkdown
            className="markdown_view"
            rehypePlugins={[rehypeRaw, rehypeSlug]}
            remarkPlugins={[gfm]}
            components={CodeBlock}
          >
            {content}
          </ReactMarkdown>
          <aside>
            <ul>
              {idList.map(v => (
                <HeadingAnchor data={v} key={v.idx} />
              ))}
            </ul>
          </aside>
        </div>
        <Comment />
      </PostCT>
    </Layout>
  );
}
