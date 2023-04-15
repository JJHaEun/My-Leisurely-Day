import styled from "@emotion/styled";
import AvatarEditor from "react-avatar-editor";

export const InputFile = styled.input`
  display: none;
`;

export const DefaultImgWrap = styled.div`
  width: 50px;
  height: 50px;
  border: 2px solid #99bbcc;
`;

export const ImgMainWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 50px;
`;

export const ImgWrap = styled.span`
  display: flex;
  flex-direction: column;
  gap: 0.7em;
  > span {
    font-size: 10px;
  }
`;

export const Avatar = styled(AvatarEditor)`
  border-radius: 50px;
`;
