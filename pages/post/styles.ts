import styled from '@emotion/styled';
import localFont from 'next/font/local';
import { breakPoint } from 'styles/theme';
const RIDI = localFont({
  src: '../../public/fonts/RIDIBatang.otf',
});
export const PostCT = styled.article`
  padding: 120px 0;
  max-width: 1000px;
  margin: 0 auto;
  h1.title {
    font-weight: 800;
    margin-top: 0;
    font-size: 3rem;
    margin-bottom: 24px;
    line-height: 1.3;
  }
  .info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    ul {
      display: flex;
      gap: 12px;
      &.category_list > li {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #fafafa;
        font-size: 16px;
        padding: 6px 12px;
        border-radius: 4px;
        color: #666;
        font-weight: 500;
        transition: all 0.2s;
        cursor: pointer;
        &:hover {
          background-color: #657aff;
          color: #fff;
        }
      }
      &.detail > li {
        color: #888;
        display: flex;
        align-items: center;
        font-size: 16px;
        gap: 4px;
        span {
          font-size: 15px;
        }
        svg {
          margin-bottom: 2px;
        }
      }
    }
  }
  img.thumb {
    object-fit: cover;
    width: 100%;
    max-height: 500px;
    margin: 0 auto;
    margin: 48px 0 24px 0;
  }
  .viewer {
    position: relative;
    display: flex;
    & > aside {
      flex: 1;
      width: 100px;
      overflow: visible;
      margin-top: 120px;
      position: sticky;
      top: 150px;
      height: 100%;
      white-space: nowrap;
      transform: translateX(200px);
    }
  }
  .markdown-body {
    * {
      font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    }
    padding-top: 60px;
    margin-bottom: 120px;
    margin: 0 auto;
    h1,
    h2,
    h3,
    h4 {
      margin: 1.5rem 0 0.5rem;
      font-weight: inherit;
      line-height: 1.42;
    }
    h1 {
      font-weight: 500;
      margin-top: 0;
      font-size: 2.5rem;
    }
    h2 {
      font-size: 2rem;
    }
    h3 {
      font-size: 1.5rem;
    }
    h4 {
      font-size: 1.1rem;
    }
    h5 {
      font-size: 0.9rem;
    }
    h6 {
      font-size: 0.8rem;
    }
    blockquote {
      background-color: #fafafa;
      margin: 40px 18px 40px 18px;
      padding: 20px 16px;
      color: #555;
      border-left: 0.3em solid #7468fb;
      p {
        margin: 0;
        font-size: 16px;
        font-weight: 400;
      }
    }
    p {
      font-size: 16px;
      font-weight: 300;
      line-height: 1.8;
      word-spacing: 0.02em;
      word-break: keep-all;
      overflow-wrap: break-word;
      margin: 18px 0 23px 0;
      code {
        padding: 1px 8px;
        border-radius: 4px;
      }
    }
    a {
      color: #5d5ecf;
      font-weight: 400;
      font-size: 17px;
      svg {
        padding-top: 2px;
        margin-right: 2px;
      }
      &:hover {
        opacity: 0.75;
        text-decoration: underline;
      }
    }
    strong {
      font-weight: 400;
    }
    & > pre {
      background-color: #fff !important;
      padding: 0 !important;
      pre {
        padding: 16px !important;
        /* background-color: rgb(46, 52, 64) !important; */
      }
    }
    code {
      font-family: 'JetBrains Mono', monospace !important;
      span {
        font-family: 'JetBrains Mono', monospace !important;
        font-size: 13px;
      }
    }
    ul,
    dl {
      list-style: circle;
      font-weight: 300;
      line-height: 2;
      li {
        margin: 8px 0;
      }
    }
    img {
      max-width: 100%;
      object-fit: contain;
      object-position: center;
      display: block;
    }
  }
  @media ${breakPoint.mobile} {
    padding: 60px 0;
    max-width: auto;
    h1.title {
      padding: 0 20px;
      font-size: 1.6rem;
      margin-bottom: 12px;
    }
    .info {
      padding: 0 20px;
      flex-direction: column;
      align-items: flex-start;
      gap: 12px;
      ul {
        &.category_list > li {
          font-size: 13px;
          padding: 4px 8px;
          border-radius: 2px;
        }
        &.detail > li {
          font-size: 14px;
          gap: 2px;
          span {
            font-size: 13px;
          }
          svg {
            margin-bottom: 0px;
          }
        }
      }
    }
    img.thumb {
      max-height: 300px;
      margin: 0 auto;
      margin: 28px 0 20px 0;
    }
    .viewer {
      & > aside {
        display: none;
      }
    }
    .markdown-body {
      padding: 24px 20px;
      & > pre {
        background-color: #fff !important;
        padding: 0 !important;
        pre {
          max-width: 87vw;
          overflow: scroll;
          padding: 16px !important;
          /* background-color: rgb(46, 52, 64) !important; */
        }
      }
      h1,
      h2,
      h3,
      h4 {
        margin: 2.5rem 0 0.5rem;
        font-weight: inherit;
        line-height: 1.42;
        font-weight: 500;
      }
      h1 {
        font-weight: 500;
        margin-top: 0;
        font-size: 2rem;
      }
      h2 {
        font-size: 1.6rem;
      }
      h3 {
        font-size: 1.25rem;
      }
      h4 {
        font-size: 1rem;
      }
      h5 {
        font-size: 0.9rem;
      }
      h6 {
        font-size: 0.8rem;
      }
      blockquote {
        background-color: #fafafa;
        margin: 24px 0px;
        padding: 12px 12px;
        color: #555;
        border-left: 0.24em solid #7468fb;
        p {
          font-size: 15px;
          line-height: 1.5;
        }
      }
      a {
        font-size: 14px;
        svg {
          padding-top: 4px;
          margin-right: 0px;
        }
        &:hover {
          opacity: 0.75;
          text-decoration: underline;
        }
      }
      p {
        font-size: 16px;
        line-height: 1.7;
        font-weight: 300;
        margin: 12px 0 16px 0;
        code {
          padding: 1px 6px;
          border-radius: 2px;
        }
      }
      code {
        span {
          font-size: 12px;
          line-height: 1;
        }
      }
      strong {
        font-weight: 500;
      }
      ul,
      dl {
        list-style: circle;
        font-weight: 300;
        line-height: 1.5;
        font-size: 14px;
        padding-left: 14px;
        li {
          margin: 8px 0;
        }
      }
    }
  }
`;

export const InsightPostPage = styled(PostCT)`
  max-width: 660px;
  text-align: center;
  .inner > .title {
    font-size: 40px;
    font-weight: 700;
  }
  .inner > .detail {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 32px;
    color: #888;
    li {
      display: flex;
      align-items: center;
      gap: 2px;
    }
  }
  font-family: ${RIDI.style.fontFamily} !important;
  .markdown-body {
    * {
      font-family: ${RIDI.style.fontFamily} !important;
      text-align: justify;
    }
    padding-top: 40px;
    margin-bottom: 120px;
    margin: 0 auto;
    h1,
    h2,
    h3,
    h4 {
      margin: 1.5rem 0 0.5rem;
      font-weight: inherit;
      line-height: 1.42;
    }
    h1 {
      font-weight: 500;
      margin-top: 0;
      font-size: 2.5rem;
    }
    h2 {
      font-size: 1.7rem;
    }
    h3 {
      font-size: 1.3rem;
    }
    h4 {
      font-size: 1.1rem;
    }
    h5 {
      font-size: 0.9rem;
    }
    h6 {
      font-size: 0.8rem;
    }
    blockquote {
      background-color: #fafafa;
      margin: 24px 8px;
      padding: 12px 12px;
      color: #555;
      border-left: 0.3em solid #7468fb;
      p {
        margin: 0;
        font-size: 16px;
        font-weight: 400;
      }
    }
    p {
      font-size: 16px;
      font-weight: 300;
      line-height: 1.8;
      color: #111;
    }
    strong {
      font-weight: 900;
      color: #000;
      /* text-decoration: underline; */
    }
  }
  @media ${breakPoint.mobile} {
    .inner > .title {
      font-size: 32px;
    }
    .inner > .detail {
      gap: 16px;
      li {
        font-size: 14px;
      }
    }
    .markdown-body {
      padding: 0 20px;
      padding-top: 28px;
      margin-bottom: 120px;
      h1,
      h2,
      h3,
      h4 {
        margin: 3rem 0 0.5rem;
        font-weight: 700;
      }
      & > pre {
        display: none;
        background-color: #fff !important;
        padding: 0 !important;
        pre {
          overflow: hidden;
          padding: 16px !important;
        }
      }
      a {
        line-height: 0;
        font-size: 16px;
      }
      p {
        text-align: start;
        font-size: 18px;
        line-height: 1.9;
        /* line-break: strict; */
      }
      img {
        width: 100%;
      }
    }
  }
`;
