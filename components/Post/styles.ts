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
export const PostSeriesAnchor = styled.span`
  display: block;
  font-weight: 400;
  font-size: 12px;
  color: #999;
  strong {
    padding: 1px 4px;
    color: ${({ theme }) => theme.primary[1]};
  }
  &:hover {
    strong {
      color: #fff;
      background-color: ${({ theme }) => theme.primary[1]};
    }
  }
`;
export const PostPublishInfoBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  .line {
    height: 1px;
    width: 16px;
    background-color: #999;
    margin: 0 4px;
  }
  div {
    display: flex;
    align-items: center;
  }
`;

export const PostSummaryBig = styled.article`
  h1 {
    font-size: 52px;
    font-weight: 600;
    line-height: 1.3;
    margin: 16px 0;
  }
  p.summary {
    font-size: 20px;
    margin-top: 18px;
    max-width: 920px;
    font-weight: 300;
    line-height: 1.3;
  }
`;
export const PostSummaryNormal = styled.article`
  display: flex;
  padding: 12px 0;
  height: 164px;
  .thumb {
    border: 1px solid #eee;
    width: 224px;
    margin-right: 16px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .article {
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    h2 {
      font-size: 22px;
      font-weight: 500;
      line-height: 1.4;
      margin-bottom: 8px;
    }
    p.summary {
      flex: 1;
      font-size: 14px;
      line-height: 1.4;
      font-weight: 300;
      max-height: 2.5rem;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .publish_info {
      margin-top: 14px;
    }
  }
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
export const PostSummarySmall = styled.article`
  h3 {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.4;
    margin-bottom: 8px;
  }
  p.summary {
    font-size: 13px;
    line-height: 1.5;
    font-weight: 300;
  }
  .publish_info {
    margin-top: 10px;
  }
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

export const CommentCT = styled.div`
  max-width: 720px;
  margin: 0 auto;
  margin-top: 120px;
`;

export const HeadingAnchorBox = styled.a`
  cursor: pointer;
  display: block;
  color: #888;
  line-height: 1.3;
  padding: 2px 0;
  font-size: 14px;
  font-weight: 300;
  margin-top: 8px;
  font-family: 'Nanum Gothic', 'sans-serif';
  &.heading_1 {
    font-weight: 700;
    margin-bottom: 2px;
    color: #000;
    font-size: 16px;
  }
  &.heading_2 {
    font-weight: 400;
    text-indent: 12px;
    margin-top: 4px;
    color: #666;
  }
  &.heading_3 {
    text-indent: 24px;
    font-size: 14px;
    margin-top: 2px;
    color: #888;
  }
  &.heading_4 {
    text-indent: 36px;
    font-size: 12px;
    margin-top: 2px;
    color: #999;
  }
  &.heading_5 {
    text-indent: 48px;
    font-size: 12px;
    margin-top: 2px;
    color: #999;
  }
  &.active {
    text-decoration: underline;
    color: #000;
  }
`;
