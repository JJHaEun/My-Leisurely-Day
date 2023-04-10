import styled from "@emotion/styled";

export const CommentTitleWrap = styled.div`
  padding-bottom: 32px;
  padding-top: 5px;
  width: 340px;
  border-bottom: 3px solid #99bbcc;
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
  height: 100px;
  resize: none;
  border: none;
  outline: none;
  background: #e9e9e9;
`;

export const EditOrBackWrap = styled.div`
  display: flex;
  gap: 2em;
  align-items: flex-end;
`;
