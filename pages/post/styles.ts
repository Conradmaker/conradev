import styled from '@emotion/styled';

export const PostCT = styled.main`
  @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap');
  padding: 160px 0;
  max-width: 1000px;
  margin: 0 auto;
  .info {
    span,
    a {
      font-weight: 400;
      font-size: 16px;
      color: #999;
      strong {
        font-weight: bold;
        color: ${({ theme }) => theme.primary[1]};
      }
    }
    a {
      cursor: pointer;
    }
  }
  img.thumb {
    max-width: 100%;
    max-height: 729px;
    margin: 0 auto;
    margin-top: 60px;
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
    padding-top: 60px;
    margin-bottom: 120px;
    max-width: 800px;
    margin: 0 auto;
    * {
      font-family: 'Nanum Gothic', 'sans-serif';
    }
    & h1,
    & h2,
    & h3,
    & h4,
    & h5,
    & h6 {
      margin-top: 56px;
      margin-bottom: 24px;
      font-weight: 700;
      line-height: 1.4;
    }
    aside {
      position: static;
      font-size: 16.8px;
      display: inline-block;
      height: auto;
      background-color: #aaa;
      margin: 0;
      line-height: 1.5;
      border-radius: 4px;
      padding: 12px 16px;
      background: #eef3f5;
    }
    blockquote {
      background-color: #fafafa;
      margin: 24px 0 40px 0;
      padding: 12px 16px;
      color: #555;
      border-left: 0.25em solid #7468fb;
      p {
        margin: 0;
        font-size: 17px;
      }
    }
    p {
      font-size: 17.5px;
      font-weight: 400;
      line-height: 1.7;
      letter-spacing: -0.004em;
      word-break: keep-all;
      overflow-wrap: break-word;
      margin-bottom: 20px;
    }
    a {
      color: #5d5ecf;
      font-weight: 400;
      font-size: 17px;
      &:hover {
        opacity: 0.75;
        text-decoration: underline;
      }
    }
    pre {
      padding: 0px 6px;
      background-color: #e0e7eb;
    }
    code {
      font-family: 'JetBrains Mono', monospace !important;
      span {
        font-family: 'JetBrains Mono', monospace !important;
      }
    }
    ul,
    dl {
      list-style: circle;
    }
    img {
      max-width: 100%;
      max-height: 400px;
      object-fit: contain;
      object-position: center;
      display: block;
      border: 1px solid #eeefff;
      border-radius: 2px;
      margin: 16px auto 32px;
    }
  }
  .markdown_view {
    width: 800px;
    margin: 0 auto;
    margin-top: 60px;
    line-height: 1.3;
    margin-bottom: 120px;
    code {
      background-color: #e0e7eb;
      color: #333;
      padding: 2px 6px;
      border-radius: 4px;
      margin: 0 2px;
      letter-spacing: 0.9px;
      font-family: 'JetBrains Mono', monospace !important;
      span {
        font-family: 'JetBrains Mono', monospace !important;
      }
    }
    h1,
    h2,
    h3,
    h4,
    h5 {
      font-weight: 600;
      line-height: 1.5;
    }
    h1 {
      font-size: 40px;
      margin: 68px 0 28px 0;
    }
    h2 {
      font-size: 30px;
      margin: 60px 0 16px 0;
    }
    h3 {
      font-size: 24px;
      margin: 52px 0 16px 0;
    }
    h4 {
      font-size: 18px;
      margin: 18px 0 8px 0;
    }
    h5 {
      font-size: 32px;
      margin: 8px 0 4px 0;
    }
    strong {
      font-weight: 500;
    }
    em {
      font-style: italic;
    }
    blockquote {
      border-left: 3px solid #5d5ecf;
      padding: 6px 24px 2px;
      background: #fbfeff;
      border-radius: 2px;
      margin: 20px 0px;
    }
    aside {
      position: static;
      font-size: 16px;
      display: inline-block;
      height: auto;
      background-color: #aaa;
      margin: 0;
      line-height: 1.5;
      border-radius: 8px;
      padding: 16px 24px;
      background: #ebf4f9;
    }

    ol {
      list-style: decimal inside;
      padding: 8px 0;
      li {
        margin: 0px 0 8px 0;
        line-height: 1.5;
        font-size: 17px;
      }
    }
    ul {
      list-style: circle inside;
      padding: 8px 0;
      li {
        margin: 0px 0 8px 0;
        line-height: 1.5;
        font-size: 17px;
      }
    }
    p {
      margin: 8px 0 16px 0;
    }
    img {
      max-width: 90%;
      max-height: 400px;
      object-fit: contain;
      object-position: center;
      display: block;
      border: 1px solid #eeefff;
      border-radius: 4px;
      margin: 32px auto 16px;
    }
  }
`;
