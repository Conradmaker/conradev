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
  padding: 8px 0px;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  gap: 4px;
  border-radius: 99px;
  & > p {
    font-weight: 300;
    font-size: 15px;
  }
  small {
    font-size: 12px;
    color: #999;
  }
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
  &.active {
    border-color: ${({ theme }) => theme.primary[1]};
    & > p,
    small {
      font-weight: 400;
      color: ${({ theme }) => theme.primary[1]};
    }
  }
`;
