import styled from '@emotion/styled';

export const SeriesCardBox = styled.div`
  /*  */
  &:hover {
    /* box-shadow: 0 5px 10px #eeeeeeaa; */
    opacity: 0.75;
    img {
      transform: scale(1.05);
    }
  }
  .thumb_box {
    width: 100%;
    max-height: 150px;
    overflow: hidden;
    img {
      transition: all 0.2s;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  ul {
    padding: 6px 8px;
    display: flex;
    border-top: 1px solid #eee;
    margin-top: 6px;
    justify-content: flex-end;
  }
  article {
    padding: 8px;
    padding-top: 6px;
    h2 {
      font-size: 18px;
      margin: 12px 0;
      font-weight: bold;
    }
    p {
      color: #888;
      font-size: 14px;
      line-height: 1.4;
      font-weight: 300;
    }
    span {
      font-size: 14px;
      font-weight: 300;
      text-align: end;
      display: block;
      margin-top: 12px;
    }
  }
`;
