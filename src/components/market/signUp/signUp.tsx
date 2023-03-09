import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { schemaSignUp } from "../../../commons/libraries/validations/signValidation";
import { useOnclickSignUp } from "../../commons/hooks/useOnclickSignUp";
import { ISignUpForm } from "./signUp.types";

export default function SignUp(): JSX.Element {
  const { onClickSignUp } = useOnclickSignUp();
  const { register, handleSubmit, formState } = useForm<ISignUpForm>({
    resolver: yupResolver(schemaSignUp),
    mode: "onSubmit",
  });
  return (
    <div>
      <h1>느린하루</h1>
      <div>
        <h2>회원가입</h2>
        <h3>Sign Up</h3>
      </div>
      <div>
        <form onSubmit={handleSubmit(onClickSignUp)}>
          <div>
            <div>
              <input type="text" {...register("name")} placeholder="Name" />
              <div>{formState.errors.name?.message}</div>
            </div>
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
            <div>
              <input
                type="password"
                {...register("passwordCheck")}
                placeholder="PasswordCheck"
              />
              <div>{formState.errors.passwordCheck?.message}</div>
            </div>
            <span>이미 아이디가 있으신가요?</span>
          </div>
          <button>회원가입</button>
        </form>
      </div>
    </div>
  );
}
