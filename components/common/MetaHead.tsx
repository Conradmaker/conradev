import dayjs from 'dayjs';
import { Post } from 'modules/query/types';
import Head from 'next/head';
import React from 'react';

const defaultKeyword =
  '유원근,개발자,프론트엔드,백엔드,IT,developer,frontend,backend,개발,develop,design,UI,UX,디자인,UI/UX,UX/UI,블로그,블로그,기술 블로그,개발블로그,인사이트,브런치,아티클,blog,brunch,Typescript,React,NextJS,HTML,CSS,Javascript,NodeJs';

type DefaultHeadProps = {
  title?: string;
  description?: string;
  keywords?: string;
  url?: string;
};
function DefaultHead({ title, description, keywords, url }: DefaultHeadProps) {
  return (
    <Head>
      <title>{`${title || '유원근'} | Conradev`}</title>
      <meta name="author" content="유원근"></meta>
      <meta
        name="description"
        content={description || '개발경험과 세상에 대한 인사이트를 공유합니다.'}
      ></meta>
      <meta name="keywords" content={keywords || defaultKeyword}></meta>

      <meta name="og:title" content={`${title} | Conradev`}></meta>
      <meta name="og:site_name" content="Conradev" />
      <meta
        name="og:description"
        content={description || '개발경험과 세상에 대한 인사이트를 공유합니다.'}
      ></meta>
      <meta name="og:url" content={url || 'https://www.conradev.me/'}></meta>
      <meta name="og:type" content="website"></meta>
      <meta name="og:keyword" content={keywords || defaultKeyword}></meta>
      <meta name="og:image" content={'/images/social_cover.png'}></meta>

      <meta name="twitter:card" content="summary"></meta>
      <meta name="twitter:site" content="https://www.conradev.me"></meta>
      <meta name="twitter:title" content={`${title} | Conradev`}></meta>
      <meta
        name="twitter:description"
        content={description || '개발경험과 세상에 대한 인사이트를 공유합니다.'}
      ></meta>
      <meta name="twitter:image" content={'/images/social_cover.png'}></meta>
      <meta name="twitter:url" content={url || 'https://www.conradev.me/'}></meta>

      <link href={url || 'https://www.conradev.me/'} rel="canonical"></link>
    </Head>
  );
}
type MetaHeadProps = {
  data?: Post;
};
function MetaHead({ data }: MetaHeadProps) {
  const type = data?.type === 1 ? 'insight' : 'dev';
  const baseUrl =
    type === 'dev' ? 'https://www.conradev.me/dev/' : 'https://www.conradev.me/insight/';
  return (
    <Head>
      <title>{`${data?.title} | Conradev`}</title>
      <meta name="author" content="유원근"></meta>
      <meta name="description" content={data?.description || ''}></meta>
      <meta name="date" content={dayjs(data?.published_at).format('YYYY-MM-DD')}></meta>
      <meta name="keywords" content={data?.keywords || defaultKeyword}></meta>
      <meta name="og:title" content={`${data?.title} | Conradev`}></meta>
      <meta name="og:site_name" content="Conradev" />
      <meta name="og:description" content={data?.description || ''}></meta>
      <meta name="og:url" content={`${baseUrl}${data?.slug}`}></meta>
      <meta name="og:type" content="article"></meta>
      <meta name="og:keyword" content={data?.keywords || defaultKeyword}></meta>
      <meta name="og:image" content={data?.cover_horizontal || ''}></meta>

      <meta name="twitter:card" content="summary"></meta>
      <meta name="twitter:site" content="https://www.conradev.me"></meta>
      <meta name="twitter:title" content={`${data?.title} | Conradev`}></meta>
      <meta name="twitter:description" content={data?.description || ''}></meta>
      <meta name="twitter:image" content={data?.cover_horizontal || ''}></meta>
      <meta name="twitter:url" content={`${baseUrl}${data?.slug}`}></meta>

      <meta
        name="article:published_time"
        content={dayjs(data?.published_at).format('YYYY-MM-DD')}
      ></meta>
      <meta
        name="article:modified_time"
        content={dayjs(data?.published_at).format('YYYY-MM-DD')}
      ></meta>

      <link href={`${baseUrl}${data?.slug}`} rel="canonical"></link>
      <link
        href={baseUrl}
        rel="alternate"
        title={type === 'insight' ? 'Conradev >> 인사이트' : 'Conradev >> 개발피드'}
        type="application/rss+xml"
      ></link>
      <link href={baseUrl} hrefLang="ko-kr" rel="alternate"></link>
    </Head>
  );
}

MetaHead.Default = DefaultHead;
export default MetaHead;
