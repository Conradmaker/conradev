import dayjs from 'dayjs';
import { Post } from 'src/modules/query/types';
import { Metadata } from 'next';

const defaultKeyword =
  '유원근,개발자,프론트엔드,백엔드,IT,developer,frontend,backend,개발,develop,design,UI,UX,디자인,UI/UX,UX/UI,블로그,블로그,기술 블로그,개발블로그,인사이트,브런치,아티클,blog,brunch,Typescript,React,NextJS,HTML,CSS,Javascript,NodeJs';

type DefaultHeadProps = {
  title: string;
  description?: string;
  keywords?: string;
  url?: string;
};
export const genDefaultMetadata = ({
  title,
  description,
  keywords,
  url,
}: DefaultHeadProps): Metadata => {
  return {
    metadataBase: new URL('https://www.conradev.me'),
    title: `${title} | Conradev`,
    authors: [{ name: '유원근', url: 'https://www.conradev.me' }],
    description: description || '개발경험과 세상에 대한 인사이트를 공유합니다.',
    keywords: defaultKeyword + keywords,
    openGraph: {
      type: 'website',
      url: url || 'https://www.conradev.me/',
      title: `${title} | Conradev`,
      description: description || '개발경험과 세상에 대한 인사이트를 공유합니다.',
      siteName: 'Conradev',
      images: [
        {
          url: '/images/social_cover.png',
          alt: 'Conradev',
        },
      ],
    },
    twitter: {
      card: 'summary',
      site: 'https://www.conradev.me',
      title: `${title} | Conradev`,
      description: description || '개발경험과 세상에 대한 인사이트를 공유합니다.',
      images: [{ url: '/images/social_cover.png' }],
    },
    alternates: {
      canonical: url || 'https://www.conradev.me/',
    },
    publisher: '유원근',
    creator: '유원근',
    icons: '/favicon.ico',
  };
};

export const genPostMetadata = (data: Post): Metadata => {
  const type = data?.type === 1 ? 'insight' : 'dev';
  const baseUrl = type === 'dev' ? '/dev/' : '/insight/';
  return {
    metadataBase: new URL('https://www.conradev.me'),
    title: `${data?.title || '게시글'} | Conradev`,
    authors: [{ name: '유원근', url: 'https://www.conradev.me' }],
    description: `${data?.description} | 개발경험과 세상에 대한 인사이트를 공유합니다.`,
    keywords: data?.keywords + defaultKeyword,
    openGraph: {
      type: 'article',
      url: `${baseUrl}${data?.slug}`,
      title: `${data?.title || '게시글'} | Conradev`,
      description: `${data?.description} | 개발경험과 세상에 대한 인사이트를 공유합니다.`,
      siteName: 'Conradev',
      tags: data?.keywords + defaultKeyword,
      modifiedTime: dayjs(data?.published_at).format('YYYY-MM-DD'),
      images: [
        {
          url: data?.cover_horizontal || '/images/social_cover.png',
          alt: 'Conradev',
        },
      ],
    },
    verification: {
      other: { 'naver-site-verification': 'f84e0e162a641e321d3dcaef5cfc0c8d66fe8755' },
    },
    twitter: {
      card: 'summary',
      site: 'https://www.conradev.me',
      title: `${data?.title || '게시글'} | Conradev`,
      description: `${data?.description} | 개발경험과 세상에 대한 인사이트를 공유합니다.`,
      images: [{ url: data?.cover_horizontal || '/images/social_cover.png' }],
    },
    alternates: {
      canonical: `${baseUrl}${data?.slug}`,
      languages: { ko: `${baseUrl}${data?.slug}` },
      types: {
        'application/rss+xml': [
          {
            url: baseUrl,
            title: type === 'insight' ? 'Conradev >> 인사이트' : 'Conradev >> 개발피드',
          },
        ],
      },
    },
    publisher: '유원근',
    creator: '유원근',
    icons: '/favicon.ico',
  };
};
