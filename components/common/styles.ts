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
  /* border-bottom: 1px solid #ededed; */
  z-index: 99;
  width: 100%;
  .inner {
    height: 56px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    nav {
      flex: 1;
      font-weight: 500;
      font-size: 15px;
      height: 100%;
      display: flex;
      align-items: center;
      a {
        padding: 4px 4px 4px 4px;
        letter-spacing: 1px;
      }
      a.active {
        color: ${({ theme }) => theme.primary[1]};
        font-weight: 600;
      }
      a + a {
        margin-left: 28px;
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
        a + a {
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
  font-size: 16px;
  font-weight: 500;
  padding-bottom: 80px;
  margin-top: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ul {
    display: flex;
    li {
      display: flex;
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
