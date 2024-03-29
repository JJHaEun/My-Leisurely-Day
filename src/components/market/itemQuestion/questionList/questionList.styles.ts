import styled from "@emotion/styled";

export const CommentList = styled.div`
  width: 340px;
  height: calc((115px + 72px) * 4);
  overflow: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

export const AnswerWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;
