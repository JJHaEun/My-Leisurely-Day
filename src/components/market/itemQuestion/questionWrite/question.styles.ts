import styled from "@emotion/styled";
import { CommentButton } from "../../../../commons/libraries/buttonCreate";

export const CommentTitleWrap = styled.div`
  padding-bottom: 32px;
  padding-top: 76px;
  width: 340px;
  border-bottom: 3px solid #acc4e5;
  > h1 {
    font-weight: 700;
    font-size: 32px;
    line-height: 100%;
    /* identical to box height, or 32px */

    letter-spacing: -0.05em;

    color: #000000;
  }
`;
export const CommentWrap = styled.div`
  padding-top: 29px;
  padding-bottom: 55px;
  width: 340px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 11px;
`;
export const CommentBox = styled.textarea`
  width: 340px;
  height: 147px;
  resize: none;
  border: none;
  outline: none;
  background: #e9e9e9;
`;

export const CreateEditProduct = styled(CommentButton)``;
