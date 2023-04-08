import { useForm } from "react-hook-form";
import { schemaSignIn } from "../../../commons/libraries/validations/signValidation";
import { ISignForm } from "./signIn.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useOnClickSignIn } from "../../commons/hooks/useOnclickSignIn";
import * as S from "./signIn.styles";
import { SignErr, SignWrap } from "../../commons/signStyles/sign.styles";
import { useMovePage } from "../../commons/hooks/useMovePage";

export default function SignIn(): JSX.Element {
  const { onClickSignIn } = useOnClickSignIn();
  const { onClickMoveTo } = useMovePage();
  const { register, handleSubmit, formState } = useForm<ISignForm>({
    resolver: yupResolver(schemaSignIn),
    mode: "onChange",
  });
  return (
    <S.SignInMain>
      <div>
        <S.Title>로그인</S.Title>
      </div>
      <div>
        <form onSubmit={handleSubmit(onClickSignIn)}>
          <S.InputWrap>
            <SignWrap>
              <S.Inputs
                type="email"
                {...register("email")}
                placeholder="Email"
                error={formState.errors.email?.message}
              />
              <SignErr>{formState.errors.email?.message}</SignErr>
            </SignWrap>
            <SignWrap>
              <S.Inputs
                type="password"
                {...register("password")}
                placeholder="Password"
                error={formState.errors.password?.message}
              />
              <SignErr>{formState.errors.password?.message}</SignErr>
            </SignWrap>
          </S.InputWrap>
          <S.ButtonWrap>
            <button type="submit">
              <span>로그인</span>
            </button>
            <button type="button" onClick={onClickMoveTo(`/market/signUp`)}>
              <span>회원가입</span>
            </button>
          </S.ButtonWrap>
        </form>
      </div>
    </S.SignInMain>
  );
}
