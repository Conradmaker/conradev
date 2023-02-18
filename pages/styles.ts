import styled from '@emotion/styled';

export const MainPage = styled.main`
  .bottom_section {
    display: flex;
    position: relative;
    gap: 68px;
    .left {
      flex: 2.2;
      .post_summary {
        margin-bottom: 40px;
      }
    }
    .right {
      align-self: flex-start;
      position: sticky;
      top: 80px;
      flex: 1;
      .about_me {
        margin-bottom: 64px;
      }
      .topics {
        margin-bottom: 52px;
        display: flex;
        flex-wrap: wrap;
        gap: 8px 20px;
      }
      .post_summary {
        margin-bottom: 52px;
      }
      .feature_post {
        margin-bottom: 80px;
      }
    }
  }
`;

export const AboutPage = styled.main`
  min-height: 100vh;
  padding: 60px 0;
  h1:nth-of-type(1) {
    margin-bottom: 220px;
    font-size: 40px;
  }
  h1 {
    font-size: 48px;
    font-weight: bold;
    line-height: 1.4;
    vertical-align: baseline;
    small {
      margin-left: 12px;
      font-size: 16px;
      vertical-align: text-bottom;
    }
  }
  h1:nth-of-type(3) {
    text-align: center;
    font-size: 64px;
    margin-top: 220px;
    text-shadow: 0 8px 10px #eeeeef;
  }
`;

export const SeriesPage = styled.main`
  min-height: 100vh;
  padding: 60px 0;
  h1 {
    font-size: 40px;
    font-weight: bold;
    line-height: 1.4;
    vertical-align: baseline;
  }
  .content {
    display: flex;
    position: relative;
    aside {
      position: sticky;
      width: 240px;
      height: 100%;
      top: 120px;
      .topics {
        margin-top: 32px;
        strong {
          font-size: 14px;
          color: ${({ theme }) => theme.primary[1]};
          font-weight: bold;
        }
        ul {
          margin: 12px 0;
          li {
            &:hover {
              opacity: 0.75;
            }
            cursor: pointer;
            padding: 6px 0;
            color: #888;
            font-weight: 300;
            margin-bottom: 8px;
            &.active {
              text-decoration: underline;
              font-weight: bold;
              color: #000;
            }
          }
        }
      }
    }
    & > ul {
      flex: 1;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 72px 28px;
      li {
      }
    }
  }
`;

export const SeriesDetailPage = styled.main`
  /* min-height: 100vh; */
  padding: 60px 0 180px 0;
  display: flex;
  position: relative;
  h1:nth-of-type(1) {
    font-size: 28px;
    font-weight: 600;
  }
  aside {
    position: sticky;
    top: 92px;
    height: 100%;
    width: 300px;
    h1 {
      margin: 12px 0 24px 0;
    }
    p {
      /* font-weight: 400; */
      font-size: 14px;
      color: ${({ theme }) => theme.primary[1]};
    }
    span {
      font-weight: 300;
      font-size: 14px;
      color: #888;
    }
  }
  ul {
    flex: 1;
    li {
    }
    li + li {
      margin-top: 72px;
    }
  }
`;
