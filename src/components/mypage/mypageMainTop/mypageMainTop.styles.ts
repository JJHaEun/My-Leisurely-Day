import styled from "@emotion/styled";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import AvatarEditor from "react-avatar-editor";
import Face6RoundedIcon from "@mui/icons-material/Face6Rounded";
import { Modal } from "antd";

export const StyledModal = styled(Modal)`
  .ant-modal-content {
    width: 400px;
  }
  .ant-modal-close-x {
    display: none;
  }
  .ant-btn-primary {
    display: flex;
    align-items: center;
    :hover {
      background-color: #ffffff;
      color: #66aacc;
    }
  }
  .ant-btn-default {
    border-color: none;
    display: flex;
    align-items: center;
  }
  .ant-modal-footer {
    display: flex;
    justify-content: flex-end;
  }
  .ant-btn {
    border: 2px solid #99bbcc;
    color: #66aacc;
    background: #ffffff;
    :hover {
      background-color: #ffffff;
      color: #66aacc;
    }
  }

  section:nth-of-type(1) {
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    span {
      position: relative;
      input {
        background: none;
        border: none;
        height: 40px;
        width: 200px;
        outline: none;
        padding: 8px 10px;
        border-bottom: 1px solid #99bbcc;
        ::placeholder {
          font-style: italic;
          color: #99bbcc;
        }
      }
      div {
        position: absolute;
        top: 40px;
        font-size: 10px;
        color: red;
        width: 170px;
      }
    }
  }
`;

export const MyPageMainWrap = styled.div`
  border: 2px solid #99bbcc;
  display: flex;
  width: 600px;
  height: 10em;
  justify-content: space-around;
  align-items: center;
`;

export const MyMainSectionLeft = styled.section`
  height: 100%;
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 2em;
  border-right: 1px solid #99bbcc;

  padding: 1em 2em 1em 1.5em;
  > div {
    display: flex;
    gap: 3px;
    > button {
      font-size: 12px;
      padding: 3px 3px;
      width: 80px;
      height: 30px;
      outline: none;
      border: none;
      background: #99bbcc;
      cursor: pointer;
    }
  }
`;

export const MyMenuFlex = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Avatar = styled(AvatarEditor)`
  border-radius: 50px;
`;

export const DefaultProfile = styled(Face6RoundedIcon)`
  font-size: 35px;
`;

export const Name = styled.span`
  font-size: 1.8em;

  padding-left: 0.2em;
`;

export const Email = styled.span`
  font-size: 0.8em;
`;

export const MyInFos = styled.section`
  display: flex;
  flex-direction: column;
`;
export const MyInFoMenu2 = styled.section`
  display: flex;
  gap: 2em;
`;
export const MyInFoMenu = styled(MyInFoMenu2)`
  border-bottom: 1px solid #99bbcc;
`;

export const MyMenuFlex2 = styled(MyMenuFlex)`
  padding: 1em 2em 0 2em;
  align-items: center;
  cursor: pointer;
`;
export const MyMenuFlex3 = styled(MyMenuFlex)`
  padding: 0 2em 1em 2em;
  align-items: center;
  cursor: pointer;
`;

export const IconMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3em;
`;

export const IPicked = styled(FavoriteRoundedIcon)`
  color: red;
`;
