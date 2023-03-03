import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import Layout from 'components/common/Layout';
import React, { useEffect, useState } from 'react';
import { HiOutlineCalendar, HiOutlineClock, HiOutlineLink } from 'react-icons/hi';
import { SpecialComponents } from 'react-markdown/lib/ast-to-react';
import { NormalComponents } from 'react-markdown/lib/complex-types';
import { InsightPostPage } from './styles';
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
};

export default function Post() {
  const [content, setContent] = useState('');
  useEffect(() => {
    axios
      .get('http://localhost:1337/api/posts/3?populate=*')
      .then(res => setContent(res.data));
  }, []);
  console.log(content);

  return (
    <Layout>
      <InsightPostPage>
        <div className="inner">
          <h1 className="title">{content?.data?.attributes.title}</h1>
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
          <img
            src={'https://cdn.mos.cms.futurecdn.net/aQ7bQjtQeboY72LkAQuAPo.jpg'}
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
        </div>
      </InsightPostPage>
    </Layout>
  );
}
