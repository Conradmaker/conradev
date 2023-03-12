import styled from '@emotion/styled';
import { breakPoint } from 'styles/theme';

export const MainPage = styled.main`
  @media ${breakPoint.mobile} {
    /* display: none; */
  }
`;

export const InsightPage = styled.main`
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
    margin-top: 40px;
    ul {
      flex: 1;
    }
  }
  @media ${breakPoint.mobile} {
    padding: 0 20px;
    .head {
      h1 {
        font-size: 32px;
        svg {
          margin-left: 4px;
          transform: translate(0px, 1px);
        }
      }
      p {
        font-size: 16px;
      }
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
  @media ${breakPoint.mobile} {
    .content {
      margin-top: 40px;
      gap: 0px;
      flex-direction: column-reverse;
      aside {
        width: 100%;
        margin-bottom: 12px;
        .inner {
          position: static;
          top: 0px;
          padding: 0px;
          & > p {
            margin-bottom: 12px;
            font-size: 20px;
          }
          ul {
            display: flex;
            gap: 8px 12px;
            flex-wrap: wrap;
            li {
              padding: 8px 6px;
              display: flex;
              justify-content: center;
              font-size: 12px;
              background-color: #fafafa;
              gap: 4px;
              span {
                font-size: 12px;
                color: #555;
              }
            }
          }
        }
      }
    }
  }
`;
