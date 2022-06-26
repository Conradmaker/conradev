import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import {
  Prism as SyntaxHighlighter,
  SyntaxHighlighterProps,
} from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import Layout from '../../components/common/Layout';
import { PostCT } from './styles';
import PostSummary from 'components/Post/PostSummary';
import PublishInfo from 'components/Post/PublishInfo';

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
  useEffect(() => {
    axios
      .get('https://b7093273-9a06-4130-a5c4-3156058b6f5d.mock.pstmn.io/md/2')
      .then(res => setContent(res.data));
  }, []);
  console.log(content);
  return (
    <Layout>
      <PostCT className="inner">
        <span>asdasdasd</span>
        <PostSummary.Large />
        <img
          src="https://reboot.studio/blog/content/images/2021/02/react-folder-structure-1.png"
          alt=""
          className="thumb"
        />
        <ReactMarkdown
          className="markdown_view"
          rehypePlugins={[rehypeRaw]}
          remarkPlugins={[gfm]}
          components={CodeBlock}
        >
          {content}
        </ReactMarkdown>
      </PostCT>
    </Layout>
  );
}
