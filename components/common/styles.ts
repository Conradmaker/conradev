import styled from '@emotion/styled';

export const HeaderBox = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  margin-top: 40px;
  .logo {
    font-size: 28px;
    font-weight: bold;
    /* font-family: 'Baloo2'; */
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
`;
