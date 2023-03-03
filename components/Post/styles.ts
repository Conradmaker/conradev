import styled from '@emotion/styled';

export const HeadingAnchorBox = styled.a`
  cursor: pointer;
  display: block;
  color: #888;
  line-height: 1.3;
  padding: 2px 0;
  font-size: 14px;
  font-weight: 300;
  margin-top: 8px;
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
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
  &:hover {
    color: #555;
  }
  &.active {
    color: #000;
    font-weight: 400;
  }
`;
