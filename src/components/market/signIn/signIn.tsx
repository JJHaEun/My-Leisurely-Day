import { useForm } from "react-hook-form";
import { schemaSignIn } from "../../../commons/libraries/validations/signValidation";
import { ISignForm } from "./signIn.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useOnClickSignIn } from "../../commons/hooks/useOnclickSignIn";
import * as S from "./signIn.styles";
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
      <S.LogPageLogo>느린하루</S.LogPageLogo>
      <div>
        <S.Title>Sign In</S.Title>
      </div>
      <div>
        <form onSubmit={handleSubmit(onClickSignIn)}>
          <S.InputWrap>
            <div>
              <S.Inputs
                type="email"
                {...register("email")}
                placeholder="Email"
              />
              <div>{formState.errors.email?.message}</div>
            </div>
            <div>
              <S.Inputs
                type="password"
                {...register("password")}
                placeholder="Password"
              />
              <div>{formState.errors.password?.message}</div>
            </div>
          </S.InputWrap>
          <S.ButtonWrap>
            <button>
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
