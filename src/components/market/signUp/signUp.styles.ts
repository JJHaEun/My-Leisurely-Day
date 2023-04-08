import styled from "@emotion/styled";
import { Inputs, SignInMain } from "../signIn/signIn.styles";

export const SignUpMain = styled(SignInMain)``;

export const SignUpInputWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  padding-bottom: 10%;
`;

export const PasswordInputWrap = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  > div {
    & > input {
      width: calc(400px - 20px);
    }
  }
`;
