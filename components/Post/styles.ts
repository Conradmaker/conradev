import styled from '@emotion/styled';

export const MainPostCT = styled.div`
  padding: 120px 0;
  .inner {
    cursor: pointer;
    .date {
      font-size: 12px;
      font-weight: bold;
    }
    .post_date {
      margin-top: 12px;
    }
    .post_read_count {
      margin-top: 32px;
    }
  }
  .inner:hover {
    opacity: 0.75;
  }
`;

export const PostDateSpan = styled.span`
  color: ${({ theme }) => theme.primary[1]};
  font-weight: 400;
  font-size: 12px;
`;
export const PostReadCntSpan = styled.span`
  display: block;
  font-weight: 400;
  font-size: 12px;
  color: #999;
`;
export const PostPublishInfoBox = styled.div`
  display: flex;
  align-items: center;
  .line {
    height: 1px;
    width: 16px;
    background-color: #999;
    margin: 0 4px;
  }
`;

export const PostSummaryBig = styled.article`
  h1 {
    font-size: 72px;
    font-weight: 600;
    line-height: 1.2;
    margin: 16px 0;
  }
  p.summary {
    font-size: 28px;
    margin-top: 18px;
    max-width: 920px;
    font-weight: 300;
    line-height: 1.3;
  }
`;
export const PostSummaryNormal = styled.article`
  h2 {
    font-size: 36px;
    font-weight: 500;
    line-height: 1.24;
    margin: 16px 0;
  }
  p.summary {
    font-size: 20px;
    line-height: 1.4;
    margin-top: 16px;
    font-weight: 300;
  }
  .publish_info {
    margin-top: 20px;
  }
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
export const PostSummarySmall = styled.article`
  h3 {
    font-size: 20px;
    font-weight: 500;
    line-height: 1.4;
    margin-bottom: 8px;
  }
  p.summary {
    font-size: 16px;
    line-height: 1.5;
    font-weight: 300;
  }
  .publish_info {
    margin-top: 12px;
  }
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
