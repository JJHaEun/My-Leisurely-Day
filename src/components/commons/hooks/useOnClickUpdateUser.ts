import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { checkValidationFile } from "../../../commons/libraries/validations/fileValidation";
import { IMutationUpdateUserArgs } from "../../../commons/types/generated/types";
import { useMutationUpdateUser } from "./customs/mutations/useMutationUpdateUser";
import { useMutationUpload } from "./customs/mutations/useMutationUpLoadFile";
import {
  FETCH_USER_LOGGED_IN,
  useQueryFetchUserLoggedIn,
} from "./customs/quries/useQueryFetchUserLoggedIn";

export interface IUpdateUser {
  name?: string;
  picture?: string;
}

export const useOnClickUpdateUser = () => {
  const router = useRouter();
  const [updateUser] = useMutationUpdateUser();
  const [img, setImg] = useState("");
  //   const ImgBoxRef = useRef<HTMLDivElement | null>(null);

  const { data } = useQueryFetchUserLoggedIn();
  //   const currentImages = (img);
  //   const prevImages =(data?.fetchUserLoggedIn.picture);
  //   const isChangeImages = currentImages !== prevImages;

  const onChangeImageUrls = (imageUrl: string): void => {
    let newImageUrls = img;
    newImageUrls = imageUrl;
    setImg(newImageUrls);
  };

  useEffect(() => {
    const picture = data?.fetchUserLoggedIn.picture;
    if (picture !== undefined && picture !== null) {
      setImg(picture);
    }
  }, [data]);

  const onClickUpdateUser = async (data: IUpdateUser) => {
    try {
      const result = await updateUser({
        variables: {
          updateUserInput: {
            name: data.name,
            picture: img,
          },
        },
        refetchQueries: [
          {
            query: FETCH_USER_LOGGED_IN,
          },
        ],
      });
      console.log(result.data?.updateUser.picture);
      Modal.success({ content: "회원정보가 수정되었습니다." });
      void router.push(`/mypage`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  return {
    onClickUpdateUser,
    // ImgBoxRef,
    img,
    setImg,
    onChangeImageUrls,
  };
};
