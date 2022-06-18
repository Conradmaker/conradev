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
