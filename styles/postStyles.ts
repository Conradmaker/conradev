import styled from '@emotion/styled';
import localFont from 'next/font/local';
import { breakPoint } from 'styles/theme';
export const RIDI = localFont({
  src: '../public/fonts/RIDIBatang.otf',
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
      transform: translateX(100px);
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
  }
`;

export const InsightPostPage = styled(PostCT)`
  max-width: 660px;
  text-align: center;
  .inner > .category {
    display: flex;
    justify-content: center;
    gap: 24px;
    font-size: 17px;
    color: #555;
    margin-bottom: 12px;
    li:hover {
      opacity: 0.6;
    }
  }
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
  }
`;
