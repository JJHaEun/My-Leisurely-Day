import { useForm } from "react-hook-form";
import { schemaSignIn } from "../../../commons/libraries/validations/signValidation";
import { ISignForm } from "./signIn.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useOnClickSignIn } from "../../commons/hooks/useOnclickSignIn";

export default function SignIn(): JSX.Element {
  const { onClickSignIn } = useOnClickSignIn();
  const { register, handleSubmit, formState } = useForm<ISignForm>({
    resolver: yupResolver(schemaSignIn),
    mode: "onChange",
  });
  return (
    <div>
      <h1>느린하루</h1>
      <div>
        <h2>로그인</h2>
        <h3>Sign In</h3>
      </div>
      <div>
        <form onSubmit={handleSubmit(onClickSignIn)}>
          <div>
            <div>
              <input type="email" {...register("email")} placeholder="Email" />
              <div>{formState.errors.email?.message}</div>
            </div>
            <div>
              <input
                type="password"
                {...register("password")}
                placeholder="Password"
              />
              <div>{formState.errors.password?.message}</div>
            </div>
            <span>아직 회원이 아니신가요?</span>
          </div>
          <button>로그인</button>
        </form>
      </div>
    </div>
  );
}
