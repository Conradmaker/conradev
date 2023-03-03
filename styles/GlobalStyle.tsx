import { css, Global } from '@emotion/react';
import React from 'react';
import { breakPoint } from './theme';

const globalStyleCss = css`
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,500;0,700;1,400&display=swap');

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    /* font-family: Inter, IBM Plex Sans KR, sans-serif; */
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    /* overflow-x: hidden; */
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: inherit;
  }
  html {
    box-sizing: border-box;
  }
  *::selection {
    background-color: #002bff;
    color: #fff;
  }
  .inner {
    max-width: 1137px;
    margin: 0 auto;
  }
  main.inner {
    margin-top: 100px;
  }
  @media ${breakPoint.mobile} {
    .inner {
      /* max-width: 237px; */
    }
  }
`;
export default function GlobalStyle() {
  return <Global styles={globalStyleCss} />;
}
