import styled from '@emotion/styled';

export const MainPage = styled.main`
  .bottom_section {
    display: flex;
    gap: 100px;
    .left {
      flex: 1.8;
      .post_summary {
        margin-bottom: 80px;
      }
    }
    .right {
      flex: 1;
      .about_me {
        margin-bottom: 32px;
      }
      .post_summary {
        margin-bottom: 40px;
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
