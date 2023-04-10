import styled from "@emotion/styled";

export const CommentButton = styled.button`
  padding: 10px 20px;
  background: #99bbcc;
  border: none;
  font-weight: 700;
  font-size: 20px;
  line-height: 100%;
  /* or 20px */

  text-align: center;
  letter-spacing: -0.05em;
  cursor: pointer;
  :hover {
    color: snow;
  }
  &:active {
    color: #acd2e5;
  }
`;
