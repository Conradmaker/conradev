import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const VerticalCardBox = styled.div`
  cursor: pointer;
  display: flex;
  height: 380px;
  min-width: 235px;
  background-color: #fffeaa;
  border-radius: 33px;
  overflow: hidden;
  position: relative;
  .card_bg {
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  .content {
    position: relative;
    z-index: 1;
    padding: 24px 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0.35) 20%,
      rgba(0, 0, 0, 0.25) 40%,
      rgba(0, 0, 0, 0.08) 60%,
      rgba(0, 0, 0, 0.05) 100%
    );
    .tag {
      color: #fff;
      font-weight: 400;
      font-size: 16px;
    }
    h3 {
      margin: 2px 0 12px 0;
      line-height: 1.3;
      font-size: 24px;
      font-weight: 700;
      line-break: loose;
      color: #fff;
    }
    .date {
      font-size: 12px;
      color: #fff;
    }
  }
  transition: all 0.3s;
  &:hover {
    transform: translateY(-4px);
  }
`;
export const HorizontalCardBox = styled(VerticalCardBox)<{
  type?: 'submit' | 'series';
}>`
  height: 280px;
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  .content {
    padding: 24px;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0.45) 20%,
      rgba(0, 0, 0, 0.35) 50%,
      rgba(0, 0, 0, 0.15) 62%,
      rgba(0, 0, 0, 0.05) 100%
    );
    .tag_list {
      display: flex;
      align-items: center;
      .tag {
        cursor: pointer;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2px 8px;
        border: 1px solid #fff;
        border-radius: 24px;
        color: #fff;
        font-weight: 300;
        font-size: 12px;
        transition: all 0.2s;
        &:hover {
          background-color: #fff;
          color: #000;
          border: 1px solid #ffffff00;
        }
      }
    }
    h3 {
      margin: 8px 0 8px 0;
      font-size: 22px;
      font-weight: 700;
      line-break: loose;
      color: #fff;
    }
  }
  ${({ type }) =>
    type === 'submit' &&
    css`
      &:hover {
        transform: translateY(0px);
      }
      .content {
        justify-content: flex-start;
        background: none;
        padding: 32px;
        h3 {
          font-size: 32px;
          svg {
            position: absolute;
            font-size: 40px;
            transform: translate(8px, 0px);
          }
          flex: 1;
        }
        button {
          font-family: 'Spoqa Han Sans Neo', 'sans-serif';
          padding: 8px 16px 8px 24px;
          align-self: flex-end;
          border: 2px solid #fff;
          outline: none;
          font-size: 22px;
          font-weight: 500;
          border-radius: 99px;
          background-color: #00000000;
          color: #fff;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
          svg {
            font-size: 32px;
          }
          &:hover {
            background-color: #fff;
            color: #000;
          }
        }
      }
    `}
`;
