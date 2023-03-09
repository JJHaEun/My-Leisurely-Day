import * as yup from "yup";

export const schema = yup.object({
  password: yup
    .string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/,
      "비밀번호는 영문,숫자, 특수문자를 포함해 최소 8자리이상이어야 합니다"
    )
    .required("비밀번호를 입력해주세요"),
  passwordCheck: yup
    .string()
    .oneOf([yup.ref("password"), undefined], "비밀번호를 다시 확인해주세요"),
});
