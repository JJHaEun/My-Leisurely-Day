import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { schemaUpdateUser } from "../../commons/libraries/validations/updateUserValidation";
import { IMutationUpdateUserArgs } from "../../commons/types/generated/types";
import { useQueryFetchUserLoggedIn } from "../commons/hooks/customs/quries/useQueryFetchUserLoggedIn";
import {
  IUpdateUser,
  useOnClickUpdateUser,
} from "../commons/hooks/useOnClickUpdateUser";
import ImgInput from "../ImgInput/imgInput";
import * as S from "./editProfile.styles";

export default function EditProfile(): JSX.Element {
  const { onClickUpdateUser, img, onChangeImageUrls, setImg } =
    useOnClickUpdateUser();
  const { data } = useQueryFetchUserLoggedIn();

  const { register, handleSubmit, formState } = useForm<IUpdateUser>({
    resolver: yupResolver(schemaUpdateUser),
    mode: "onSubmit",
    values: {
      name:
        data?.fetchUserLoggedIn.name !== "" ? data?.fetchUserLoggedIn.name : "",
    },
  });
  return (
    <div>
      <S.EditTitle>내 정보수정</S.EditTitle>
      <form onSubmit={handleSubmit(onClickUpdateUser)}>
        <S.Inputs
          type="text"
          {...register("name")}
          placeholder="Name"

          //   error={formState.errors.updateUserInput?.name?.message}
        />
        <S.PictureSection>
          <ImgInput
            img={img}
            onChangeImageUrls={onChangeImageUrls}
            setImg={setImg}
          />
        </S.PictureSection>
        <S.EditProfile>정보수정</S.EditProfile>
      </form>
    </div>
  );
}
