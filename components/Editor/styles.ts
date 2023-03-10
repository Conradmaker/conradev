import styled from '@emotion/styled';
import { RIDI } from 'styles/postStyles';

export const MdEditorCT = styled.div`
  display: flex;
  & > div {
    flex: 1;
    position: relative;
    .md_editor {
      position: sticky;
      top: 0;
    }
  }
  & > div:last-of-type {
    padding-bottom: 700px;
    padding-left: 5px;
    padding-right: 5px;
  }
  .w-md-editor-text-pre > code,
  .w-md-editor-text-input {
    font-size: 20px !important;
    line-height: 1.5 !important;
  }
  .w-md-editor-text {
    padding: 32px;
  }
  *::selection {
    background-color: #00000055;
    color: #ffffff !important;
  }
  .inner.edit {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .col {
      width: 100%;
      display: flex;
      gap: 12px;
    }
    /* &.insight input {
      font-family: ${RIDI.style.fontFamily};
      text-align: center;
      margin-bottom: 24px;
      line-height: 1.3;
      &.detail {
        font-size: 16px;
        color: #888;
      }
    } */
    /* input {
      width: 100%;
      border: none;
      border-bottom: 1px solid #00000022;
    } */
  }
`;
