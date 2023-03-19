import styled from "@emotion/styled";

export const CommentTitleWrap = styled.div`
  padding-bottom: 32px;
  padding-top: 76px;
  border-bottom: 3px solid #555555;
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
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 11px;
`;
export const CommentBox = styled.textarea`
  width: 385px;
  height: 147px;
  resize: none;
  border: none;
  outline: none;
  background: #e9e9e9;
`;
export const CommentButton = styled.button`
  width: 116px;

  height: 42px;
  background: #ffe004;
  border: none;
  font-weight: 700;
  font-size: 20px;
  line-height: 100%;
  /* or 20px */

  text-align: center;
  letter-spacing: -0.05em;

  color: #000000;
  :hover {
    cursor: pointer;
  }
`;
