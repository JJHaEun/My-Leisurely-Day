import { Modal } from "antd";
import { ChangeEvent, useRef } from "react";
import { checkValidationFile } from "../../commons/libraries/validations/fileValidation";
import { useMutationUpload } from "../commons/hooks/customs/mutations/useMutationUpLoadFile";
import { useQueryFetchUserLoggedIn } from "../commons/hooks/customs/quries/useQueryFetchUserLoggedIn";
import * as S from "./imgInput.styles";

export default function ImgInput(props: any): JSX.Element {
  const { data } = useQueryFetchUserLoggedIn();
  const [uploadFile] = useMutationUpload();
  const ImgInputRef = useRef<HTMLInputElement | null>(null);

  const onClickImgInput = (): void => {
    if (ImgInputRef.current !== null) ImgInputRef.current.click();
  };
  const onChangeInput = async (
    e: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    const file = e.target.files?.[0];
    const isValid = checkValidationFile(file);
    if (!isValid) return;

    try {
      const result = await uploadFile({
        variables: {
          file,
        },
      });
      if (typeof result.data?.uploadFile.url !== "string") {
        return;
      }

      props.onChangeImageUrls(result.data?.uploadFile?.url);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  return (
    <div>
      {data?.fetchUserLoggedIn.picture === "" ? (
        <S.DefaultImgWrap onClick={onClickImgInput}>
          이미지 선택
        </S.DefaultImgWrap>
      ) : (
        <S.ImgMainWrap>
          <S.ImgWrap>
            <span>Before</span>
            <S.Avatar
              image={`https://storage.googleapis.com/${data?.fetchUserLoggedIn.picture}`}
              width={30}
              height={30}
              border={0}
              borderRadius={50}
              scale={1.2}
              //   onPositionChange={onClickImgInput}
            />
          </S.ImgWrap>
          <S.ImgWrap>
            <span>After</span>
            <S.Avatar
              image={`https://storage.googleapis.com/${props.img}`}
              width={30}
              height={30}
              border={0}
              borderRadius={50}
              scale={1.2}
              onImageChange={onClickImgInput}
              //   onPositionChange={onClickImgInput}
            />
            {/* <img style={{ width: "30px", height: "30px" }} /> */}
          </S.ImgWrap>
        </S.ImgMainWrap>
      )}

      <S.InputFile type="file" onChange={onChangeInput} ref={ImgInputRef} />

      {/* <ImgDiv url={img} ref={ImgBoxRef} onClick={onClickImgInput} /> */}
    </div>
  );
}
