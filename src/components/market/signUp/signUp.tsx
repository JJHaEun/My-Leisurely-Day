import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { schemaSignUp } from "../../../commons/libraries/validations/signValidation";
import { useMovePage } from "../../commons/hooks/useMovePage";
import { useOnclickSignUp } from "../../commons/hooks/useOnclickSignUp";
import { ISignUpForm } from "./signUp.types";
import * as S from "./signUp.styles";
import * as ST from "../signIn/signIn.styles";
import { SignErr, SignWrap } from "../../commons/signStyles/sign.styles";

export default function SignUp(): JSX.Element {
  const { onClickSignUp } = useOnclickSignUp();
  const { onClickMoveTo } = useMovePage();

  const { register, handleSubmit, formState } = useForm<ISignUpForm>({
    resolver: yupResolver(schemaSignUp),
    mode: "onChange",
  });
  return (
    <S.SignUpMain>
      <div>
        <ST.Title>회원가입</ST.Title>
      </div>
      <div>
        <form onSubmit={handleSubmit(onClickSignUp)}>
          <S.SignUpInputWrap>
            <SignWrap>
              <ST.Inputs
                type="text"
                {...register("name")}
                placeholder="Name"
                error={formState.errors.name?.message}
              />
              <SignErr>{formState.errors.name?.message}</SignErr>
            </SignWrap>
            <SignWrap>
              <ST.Inputs
                type="email"
                {...register("email")}
                placeholder="Email"
                error={formState.errors.email?.message}
              />
              <SignErr>{formState.errors.email?.message}</SignErr>
            </SignWrap>
            <S.PasswordInputWrap>
              <SignWrap>
                <ST.Inputs
                  type="password"
                  {...register("password")}
                  placeholder="Password"
                  error={formState.errors.password?.message}
                />
                <SignErr>{formState.errors.password?.message}</SignErr>
              </SignWrap>
              <SignWrap>
                <ST.Inputs
                  type="password"
                  {...register("passwordCheck")}
                  placeholder="PasswordCheck"
                  error={formState.errors.passwordCheck?.message}
                />
                <SignErr>{formState.errors.passwordCheck?.message}</SignErr>
              </SignWrap>
            </S.PasswordInputWrap>
          </S.SignUpInputWrap>
          <ST.ButtonWrap>
            <button>회원가입</button>
            <button type="button" onClick={onClickMoveTo(`/market/signIn`)}>
              로그인
            </button>
          </ST.ButtonWrap>
        </form>
      </div>
    </S.SignUpMain>
  );
}
