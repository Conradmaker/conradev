import styled from '@emotion/styled';

export const MainPage = styled.main``;

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

export const InsightPage = styled.main`
  height: 300vh;
  .head {
    h1 {
      font-size: 52px;
      font-weight: 800;
      svg {
        margin-left: 12px;
        transform: translate(0px, 2px);
      }
    }
    p {
      margin-top: 12px;
      font-size: 20px;
      line-height: 1.4;
      font-weight: 600;
      color: #555;
    }
  }
  .content {
    display: flex;
    margin-top: 80px;
    ul {
      flex: 1;
    }
  }
`;

export const DevPage = styled(InsightPage)`
  .content {
    display: flex;
    margin-top: 80px;
    gap: 76px;
    & > ul {
      flex: 1;
    }
    aside {
      width: 260px;
      .inner {
        position: sticky;
        top: 80px;
        padding: 40px 12px;
        & > p {
          margin-bottom: 24px;
          font-size: 28px;
          font-weight: bold;
        }
        ul {
          li {
            padding: 12px 0;
            font-size: 16px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            cursor: pointer;
            &:hover {
              p {
                opacity: 0.6;
                font-weight: 600;
              }
            }
          }
        }
      }
    }
  }
`;
