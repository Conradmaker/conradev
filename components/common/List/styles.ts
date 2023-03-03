import styled from '@emotion/styled';

export const SimpleListItem = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;
  margin-bottom: 44px;
  cursor: pointer;
  &:hover {
    article {
      h2 {
        opacity: 0.6;
      }
    }
  }
  article {
    flex: 1;
    h2 {
      transition: all 0.2s;
      font-size: 42px;
      font-weight: 800;
      line-height: 1.25;
    }
    p {
      display: flex;
      font-size: 20px;
      align-items: center;
      font-size: 1.1rem;
      font-weight: 400;
      margin-top: 14px;
      color: #888;
      .dot {
        margin: 8px;
        width: 3px;
        height: 3px;
        border-radius: 3px;
        background-color: #888;
      }
    }
  }
  .img_wrapper {
    flex: 1;
    img {
      max-height: 16vw;
      width: 100%;
      object-fit: cover;
    }
  }
`;

export const PostItemBox = styled.div`
  margin: 40px 0;
  padding-bottom: 40px;
  border-bottom: 1px solid #eeeeee77;
  display: flex;
  cursor: pointer;
  &:hover {
    .article > h2 {
      opacity: 0.6;
    }
  }
  .article {
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
    h2 {
      transition: all 0.2s;
      font-size: 28px;
      font-weight: 700;
      line-height: 1.4;
    }
    p.summary {
      flex: 1;
      font-size: 17px;
      line-height: 1.45;
      font-weight: 400;
      max-height: 3rem;
      color: #555;
      margin-top: 12px;
      margin-bottom: 40px;
    }
    .info {
      display: flex;
      align-items: center;
      justify-content: space-between;
      ul.tag_list {
        display: flex;
        gap: 12px;
        flex: auto;
        .tag {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #f7f7fe;
          font-size: 15px;
          padding: 6px 12px;
          border-radius: 6px;
          color: #666;
          font-weight: 500;
          transition: all 0.2s;
          &:hover {
            background-color: #657aff;
            color: #fff;
          }
        }
      }
      ul.detail {
        flex: 1;
        justify-content: flex-end;
        display: flex;
        align-items: center;
        gap: 12px;
        li {
          color: #888;
          display: flex;
          align-items: center;
          font-size: 16px;
          gap: 4px;
          span {
            font-size: 15px;
          }
          svg {
            margin-bottom: 2px;
          }
        }
      }
    }
  }
`;
