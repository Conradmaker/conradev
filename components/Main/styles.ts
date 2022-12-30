import styled from '@emotion/styled';

export const AboutMeCT = styled.div`
  & > p {
    margin: 24px 0;
    max-width: 300px;
    font-weight: 300;
    line-height: 1.35;
  }
  ul {
    li + li {
      margin-top: 12px;
    }
    li {
      padding: 8px 0;
      display: flex;
      align-items: center;
      color: #888;
      font-weight: 300;
      font-size: 14px;
      svg {
        font-size: 16px;
        margin-right: 12px;
      }
    }
  }
`;

export const TopicItem = styled.div`
  display: flex;
  padding: 10px 0;
  align-items: center;
  justify-content: space-between;
  & > p {
    font-weight: 400;
    font-size: 18px;
  }
  .pill {
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px 10px;
    border: 1px solid #ededed;
    border-radius: 99px;
  }
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
