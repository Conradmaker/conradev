import styled from '@emotion/styled';

export const PostCT = styled.main`
  padding: 160px 0;
  img.thumb {
    max-width: 1200px;
    max-height: 729px;
    margin: 0 auto;
    margin-top: 60px;
  }
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
  .viewer {
    position: relative;
    display: flex;
    aside {
      flex: 1;
      margin-top: 120px;
      position: sticky;
      top: 150px;
      height: 100%;
      margin-left: 100px;
      /* width: 240px; */
    }
  }
  .markdown_view {
    width: 720px;
    margin: 0 auto;
    margin-top: 60px;
    line-height: 1.3;
    code {
      background-color: #e2f1f8;
      color: #333;
      padding: 0 4px;
      border-radius: 4px;
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
      margin: 40px 0 12px 0;
    }
    h2 {
      font-size: 30px;
      margin: 30px 0 12px 0;
    }
    h3 {
      font-size: 24px;
      margin: 24px 0 12px 0;
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
      font-weight: bold;
    }
    em {
      font-style: italic;
    }
    blockquote {
      padding: 4px 24px;
      background: #e2f1f8;
    }

    ol {
      list-style: decimal inside;
      padding: 8px 0;
      li {
        margin: 12px 0;
        line-height: 1.5;
        font-size: 17px;
      }
    }
    ul {
      list-style: circle inside;
      padding: 12px 0;
      li {
        margin: 12px 0;
        line-height: 1.5;
        font-size: 17px;
      }
    }
    a {
      /* text-decoration: underline; */
      color: #0f11f7;
      font-weight: bold;
    }
    p {
      margin: 8px 0 12px 0;
      font-size: 18px;
      line-height: 1.7;
      font-weight: 300;
    }
    img {
      max-width: 90%;
      max-height: 400px;
      object-fit: contain;
      object-position: center;
      display: block;
      border: 1px solid #eee;
      border-radius: 12px;
      margin: 12px auto;
    }
  }
`;
