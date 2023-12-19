import React from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import { Prism, SyntaxHighlighterProps } from 'react-syntax-highlighter';
import { materialOceanic } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { NormalComponents } from 'react-markdown/lib/complex-types';
import { SpecialComponents } from 'react-markdown/lib/ast-to-react';
import { CodeProps } from 'react-markdown/lib/ast-to-react';
import { HiOutlineLink } from 'react-icons/hi';
import { MdViewCT } from './styles';

export const CodeBlock: Partial<
  Omit<NormalComponents, keyof SpecialComponents> & SpecialComponents
> = {
  a: props => {
    return (
      <a
        href={props.href}
        target="_blank"
        rel="noreferrer"
        title={(props.children[0] as string) || ''}
      >
        <HiOutlineLink size={16} />
        {props.children[0]}
      </a>
    );
  },
  img: props => {
    return (
      <img draggable={false} src={`${props.src}`} alt={props.alt} title={props.alt} />
    );
  },
  code({ inline, className, children, ...props }: CodeProps) {
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
      <Prism
        style={materialOceanic}
        language={match[1]}
        {...(props as Partial<SyntaxHighlighterProps>)}
      >
        {String(children).replace(/\n$/, '')}
      </Prism>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
};
type PostViewProps = { content: string; type?: 'insight' | 'dev' };
export default function MdView({ content, type = 'insight' }: PostViewProps) {
  return (
    <MdViewCT>
      <ReactMarkdown
        className={type === 'insight' ? 'markdown-body insight' : 'markdown-body'}
        rehypePlugins={[rehypeRaw, rehypeSlug]}
        remarkPlugins={[gfm]}
        components={CodeBlock}
      >
        {content || ''}
      </ReactMarkdown>
    </MdViewCT>
  );
}
