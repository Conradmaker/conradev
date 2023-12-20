import styled from '@emotion/styled';
import { RIDI } from 'src/styles/postStyles';
import { breakPoint } from 'src/styles/theme';

export const HeadingAnchorBox = styled.a`
  cursor: pointer;
  display: block;
  color: #888;
  line-height: 1.3;
  padding: 2px 0;
  font-size: 14px;
  font-weight: 300;
  margin-top: 8px;
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  transition: all 0.2s;
  &.heading_1 {
    font-weight: 700;
    margin-bottom: 2px;
    color: #000;
    font-size: 16px;
  }
  &.heading_2 {
    font-weight: 400;
    text-indent: 12px;
    margin-top: 6px;
    color: #555;
  }
  &.heading_3 {
    text-indent: 24px;
    font-size: 14px;
    margin-top: 6px;
    color: #888;
  }
  &.heading_4 {
    text-indent: 36px;
    font-size: 12px;
    margin-top: 2px;
    color: #999;
  }
  &.heading_5 {
    text-indent: 48px;
    font-size: 12px;
    margin-top: 2px;
    color: #999;
  }
  &:hover {
    color: #555;
  }
  &.active {
    color: #000;
    font-weight: 400;
  }
`;

export const MdViewCT = styled.div`
  .markdown-body {
    * {
      font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    }
    padding-top: 60px;
    margin-bottom: 120px;
    margin: 0 auto;
    background-color: #fff;
    h1,
    h2,
    h3,
    h4 {
      color: #111;
      margin: 3.5rem 0 0.5rem;
      font-weight: inherit;
      line-height: 1.42;
      border-color: #cfd7dd;
    }
    h1 {
      font-weight: 500;
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
      font-size: 16px;
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
      font-weight: 500;
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
    ol,
    dl {
      color: #444;
      padding-left: 24px;
      list-style: circle;
      font-weight: 300;
      line-height: 2;
      margin: 24px 0 24px 0;
      li {
        margin: 4px 0;
      }
    }
    ol {
      list-style: decimal;
    }
    img {
      width: 100%;
      object-fit: contain;
      object-position: center;
      display: block;
    }
    hr {
      margin: 5rem 0;
      background-color: #cfd7dd;
    }
  }
  .markdown-body.insight {
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
      margin: 3.5rem 0 0.5rem;
      font-weight: inherit;
      line-height: 1.42;
      font-weight: 700;
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
      font-size: 15.5px;
      font-weight: 200;
      line-height: 1.8;
      color: #111;
    }
    strong {
      font-weight: 900;
      color: #000;
    }
    code {
      font-family: 'JetBrains Mono', monospace !important;
      span {
        font-family: 'JetBrains Mono', monospace !important;
      }
    }
    img {
      max-height: 360px;
    }
    hr {
      margin: 4rem 0;
    }
  }
  @media ${breakPoint.mobile} {
    .markdown-body {
      padding: 24px 20px;
      & > pre {
        background-color: #fff !important;
        padding: 0 !important;
        pre {
          max-width: 87vw;
          overflow: scroll;
          padding: 16px !important;
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
      p a {
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
    .markdown-body.insight {
      padding: 0 20px;
      padding-top: 28px;
      margin-bottom: 120px;
      h1,
      h2,
      h3,
      h4 {
        margin: 2.5rem 0 0.5rem;
        font-weight: 700;
      }
      h1 {
        font-size: 1.8rem;
      }
      h2 {
        font-size: 1.55rem;
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
        font-size: 15px;
        line-height: 1.85;
        /* line-break: strict; */
      }
      img {
        width: 100%;
      }
      hr {
        margin: 3rem 0;
      }
    }
  }
`;
