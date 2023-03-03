import styled from '@emotion/styled';

const MainPostListCT = styled.div`
  h2 {
    font-size: 20px;
    font-weight: 400;
    strong {
      display: flex;
      font-size: 38px;
      font-weight: 800;
      line-height: 1.5;
      svg {
        margin-left: 8px;
        margin-top: 5px;
      }
    }
  }
`;
export const ArticleListCT = styled(MainPostListCT)`
  margin: 0px 0 32px 0;
  & > ul {
    margin-top: 12px;
    display: grid;
    gap: 28px;
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const DevPostCT = styled(MainPostListCT)`
  margin: 120px 0 32px 0;
  & > ul {
    margin-top: 12px;
    display: grid;
    gap: 28px;
    grid-template-columns: repeat(3, 1fr);
    & > li:first-of-type {
      grid-column: span 2;
    }
    & > li:nth-of-type(7) {
      grid-column: span 2;
    }
  }
`;
