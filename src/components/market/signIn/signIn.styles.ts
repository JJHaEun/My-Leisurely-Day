import styled from "@emotion/styled";

export const SignInMain = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 1188px;
  background: #f8f8f8;
  padding-top: 193px;
`;
export const LogPageLogo = styled.h1`
  font-size: 60px;
  font-family: "Somi", "Franklin Gothic Medium", "Arial Narrow", Arial,
    sans-serif;
  padding-bottom: 80px;
`;
export const Inputs = styled.input`
  background: #f6f6f6;
  border: none;
  border-bottom: 2px solid #99bbcc;
  width: 786.96px;
  height: 64px;
  padding: 25px 37.28px;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 100%;

  display: flex;
  outline: none;
  align-items: center;

  ::placeholder {
    color: #99aecc;
  }
`;
export const Title = styled.h2`
  font-size: 48px;
  padding-bottom: 25px;
`;
export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  padding-bottom: 50px;
`;
export const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  & > button {
    cursor: pointer;
    width: 200px;
    height: 50px;
    border: none;
    background-color: #99bbcc;
    color: snow;
    :hover {
      color: snow;
    }
    &:active {
      color: #acd2e5;
    }
    & > span {
      :hover {
        border-bottom: 1px solid snow;
      }
    }
  }
`;
