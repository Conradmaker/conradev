'use client';
import styled from '@emotion/styled';
import { breakPoint } from 'src/styles/theme';

export const SimpleListItem = styled.div`
  & > a {
    display: flex;
    align-items: center;
    gap: 50px;
  }
  margin-bottom: 44px;
  cursor: pointer;
  &:hover {
    article {
      h2 {
        opacity: 0.6;
      }
    }
  }
  article {
    flex: 1;
    & > ul {
      display: flex;
      align-items: center;
      gap: 8px;
      li {
        color: #555;
        font-weight: 300;
        flex-wrap: wrap;
        padding: 4px 0px;
        margin-bottom: 6px;
        font-size: 15px;
        &:hover {
          color: #000;
        }
      }
    }
    h2 {
      transition: all 0.2s;
      font-size: 42px;
      font-weight: 800;
      line-height: 1.25;
    }
    p {
      display: flex;
      font-size: 20px;
      align-items: center;
      font-size: 1.1rem;
      font-weight: 400;
      margin-top: 14px;
      color: #888;
      .dot {
        margin: 8px;
        width: 3px;
        height: 3px;
        border-radius: 3px;
        background-color: #888;
      }
    }
  }
  .img_wrapper {
    flex: 1;
    img {
      max-height: 16vw;
      width: 100%;
      object-fit: cover;
    }
  }
  @media ${breakPoint.mobile} {
    & > a {
      flex-direction: column-reverse;
      align-items: flex-start;
      gap: 8px;
    }
    margin-bottom: 48px;
    article {
      & > ul {
        gap: 8px;
        li {
          margin-bottom: 0px;
          font-size: 13px;
        }
      }
      h2 {
        font-size: 22px;
        line-height: 1.4;
      }
      p {
        font-size: 13px;
        margin-top: 6px;
        .dot {
          margin: 6px;
        }
      }
    }
    .img_wrapper {
      flex: 1;
      width: 100%;
      img {
        max-height: 44vw;
        width: 100%;
        object-fit: cover;
      }
    }
  }
`;

export const PostItemBox = styled.div`
  margin: 40px 0;
  padding-bottom: 40px;
  border-bottom: 1px solid #eeeeee77;
  display: flex;
  cursor: pointer;
  &:hover {
    .article > h2 {
      opacity: 0.6;
    }
  }
  .article {
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
    h2 {
      transition: all 0.2s;
      font-size: 28px;
      font-weight: 700;
      line-height: 1.4;
      /* margin-top: 0; */
    }
    p.summary {
      flex: 1;
      font-size: 17px;
      line-height: 1.45;
      font-weight: 400;
      max-height: 3rem;
      color: #555;
      margin-top: 12px;
      margin-bottom: 40px;
    }
    .info {
      display: flex;
      align-items: center;
      justify-content: space-between;
      ul.tag_list {
        display: flex;
        gap: 12px;
        .tag {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #f7f7fe;
          font-size: 15px;
          padding: 6px 12px;
          border-radius: 6px;
          color: #666;
          font-weight: 500;
          transition: all 0.2s;
          &:hover {
            background-color: #657aff;
            color: #fff;
          }
        }
      }
      ul.detail {
        flex: 1;
        justify-content: flex-end;
        display: flex;
        align-items: center;
        gap: 12px;
        li {
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
  }
  @media ${breakPoint.mobile} {
    margin: 36px 0;
    padding-bottom: 36px;
    .article {
      h2 {
        font-size: 20px;
        font-weight: 600;
      }
      p.summary {
        font-size: 14px;
        margin-top: 8px;
        margin-bottom: 32px;
        text-align: justify;
      }
      .info {
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
        ul.tag_list {
          align-self: flex-end;
          gap: 8px;
          .tag {
            font-size: 12px;
            padding: 4px 10px;
            border-radius: 2px;
            font-weight: 400;
          }
        }
        ul.detail {
          align-self: flex-end;
          li {
            font-size: 12px;
            span {
              font-size: 13px;
            }
            svg {
              margin-bottom: 1px;
            }
          }
        }
      }
    }
  }
`;
