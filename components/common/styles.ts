import styled from '@emotion/styled';

export const HeaderBox = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  .logo {
    font-size: 32px;
    font-family: 'Baloo2';
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
  background-color: #ffffff;
  border-top: 1px solid #ededed;
  border-bottom: 1px solid #ededed;
  font-weight: 400;
  font-size: 12px;
  height: 56px;
  .inner {
    height: 100%;
    display: flex;
    align-items: center;
    a {
      padding: 4px 4px 4px 4px;
    }
    a.active {
      color: #fff;
      background: ${({ theme }) => theme.primary[1]};
    }
    a + a {
      margin-left: 28px;
    }
  }
`;

export const DividerBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  span {
    font-size: 12px;
    font-weight: 500;
    margin-right: 20px;
  }
  .line {
    flex: 1;
    height: 1px;
    background-color: #ededed;
  }
`;

export const FooterCT = styled.footer`
  font-size: 14px;
  color: #888;
  font-weight: 300;
  padding-bottom: 80px;
  margin-top: 52px;
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
