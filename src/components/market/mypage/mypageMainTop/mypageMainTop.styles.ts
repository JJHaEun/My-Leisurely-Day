import styled from "@emotion/styled";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";

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
  padding-left: 1.5em;
  padding-right: 2em;
  > button {
    cursor: pointer;
  }
`;

export const MyMenuFlex = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.span`
  font-size: 1.8em;
  padding-bottom: 0.2em;
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
