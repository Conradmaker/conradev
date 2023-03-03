/* eslint-disable @next/next/no-img-element */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialOceanic } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import Layout from '../../components/common/Layout';
import { PostCT } from '../post/styles';
import HeadingAnchor from 'components/Post/HeadingAnchor';
import { NormalComponents } from 'react-markdown/lib/complex-types';
import { SpecialComponents } from 'react-markdown/lib/ast-to-react';
import { CodeProps } from 'react-markdown/lib/ast-to-react';
import useHeadAnchor from 'hooks/useHeadAnchor';
import { HiOutlineCalendar, HiOutlineClock, HiOutlineLink } from 'react-icons/hi';

const CodeBlock: Partial<
  Omit<NormalComponents, keyof SpecialComponents> & SpecialComponents
> = {
  a: props => {
    console.log(props);
    return (
      <a href={props.href} target="_blank" rel="noreferrer">
        <HiOutlineLink size={16} />
        {props.children[0]}
      </a>
    );
  },
  img: props => {
    console.log(props.src);
    return <img src={`http://localhost:1337${props.src}`} alt="" />;
  },
  code({ inline, className, children, ...props }: CodeProps) {
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
      <SyntaxHighlighter style={materialOceanic} language={match[1]} {...props}>
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
  const { idList } = useHeadAnchor([content]);
  useEffect(() => {
    axios
      .get('http://localhost:1337/api/posts/3?populate=*')
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
              {content?.data?.attributes?.categories?.data.map(v => (
                <li>{v.attributes.name}</li>
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
              'http://localhost:1337' +
              content?.data?.attributes?.cover.data.attributes.url
            }
            alt="s"
            className="thumb"
          />
        </div>
        <div className="viewer">
          <aside />
          <ReactMarkdown
            className="markdown-body"
            rehypePlugins={[rehypeRaw, rehypeSlug]}
            remarkPlugins={[gfm]}
            // disallowedElements={['aside']}
            components={CodeBlock}
          >
            {content?.data?.attributes.blocks[0].body}
          </ReactMarkdown>
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
