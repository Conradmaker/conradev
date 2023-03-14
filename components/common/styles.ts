import styled from '@emotion/styled';
import { breakPoint } from 'styles/theme';

export const HeaderBox = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  margin-top: 40px;
  .logo {
    font-size: 28px;
    font-weight: bold;
    svg {
      width: 132px;
      height: 40px;
    }
  }
  & > ul {
    display: flex;
    font-size: 14px;
    li {
      cursor: pointer;
    }
    li:nth-of-type(1) {
      color: ${({ theme }) => theme.primary[1]};
    }
    li + li {
      margin-left: 14px;
    }
  }
  @media ${breakPoint.mobile} {
    padding: 0 20px;
    height: 52px;
    margin-top: 0px;
    .logo svg {
      width: 120px;
    }
  }
`;

export const NavigationBox = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  background-color: #ffffff;
  z-index: 99;
  width: 100%;
  .inner {
    height: 56px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    nav {
      flex: 1;
      font-weight: 400;
      font-size: 15px;
      height: 100%;
      display: flex;
      align-items: center;
      a,
      .keyword {
        padding: 4px 4px 4px 4px;
        letter-spacing: 1px;
      }
      a.active,
      .keyword.active {
        color: ${({ theme }) => theme.primary[1]};
        font-weight: 500;
      }
      a + a,
      .keyword {
        margin-left: 28px;
      }
      .keyword {
        cursor: pointer;
        .category_list {
          height: 0;
          overflow: hidden;
          opacity: 0;
          transition: all 0.25s;
          border-width: 0px;
        }
        &:hover {
          font-weight: 500;
          .category_list {
            height: 68px;
            overflow: visible;
            opacity: 1;
            border-width: 1px;
          }
        }
      }
    }
  }
  .search {
    font-size: 20px;
    cursor: pointer;
    &:hover {
      color: ${({ theme }) => theme.primary[1]};
    }
  }
  @media ${breakPoint.mobile} {
    padding: 0 16px;
    .inner {
      /* background-color: #fffaaa; */
      height: 40px;
      nav {
        /* justify-content: center; */
        font-size: 14px;
        a + a,
        .keyword {
          margin-left: 12px;
        }
      }
    }
    .search {
      display: none;
    }
  }
`;
export const FooterCT = styled.footer`
  font-size: 14px;
  font-weight: 400;
  padding-bottom: 80px;
  margin-top: 120px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 16px;
    li {
      a {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        &:hover {
          opacity: 0.6;
        }
      }
    }
    li:nth-of-type(2) {
      flex: 1;
      display: flex;
      justify-content: center;
    }
  }
  @media ${breakPoint.mobile} {
    padding: 0 20px;
    margin-top: 100px;
    padding-bottom: 24px;
    font-size: 12px;
    font-weight: 400;
  }
`;

export const OmniBarCT = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  padding-top: 240px;
  justify-content: center;
`;

export const CategoryListCT = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  border-bottom: 1px solid #eee;
  background-color: #fff;
  ul.inner {
    padding-top: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 12px 0px;
    align-items: center;
    justify-content: flex-start;
    height: 56px;
  }
  li {
    &::after {
      content: '/';
      padding: 0 18px;
      font-size: 4px;
      color: #888;
    }
    &:last-of-type {
      &::after {
        content: '';
        padding: 0px;
      }
    }
    &:hover {
      opacity: 0.6;
    }
    display: flex;
    align-items: center;
    a {
      padding: 12px 4px;
      display: flex;
      align-items: center;
      gap: 8px;
      color: #223;
    }
    strong {
      font-size: 14px;
      font-weight: 400;
    }
    small {
      font-size: 12px;
    }
  }
  @media ${breakPoint.mobile} {
    padding: 0 20px;
    li {
      &::after {
        content: '/';
        padding: 0 12px;
        font-size: 4px;
        color: #888;
      }
      display: flex;
      align-items: center;
      a {
        padding: 12px 4px;
        display: flex;
        align-items: center;
        gap: 8px;
        color: #223;
      }
      strong {
        font-size: 14px;
        font-weight: 400;
      }
      small {
        font-size: 12px;
      }
    }
  }
`;
