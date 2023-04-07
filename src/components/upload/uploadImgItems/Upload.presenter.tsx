import type { IUploadImagesBoardUIProps } from "./Upload.types";
import * as S from "./Upload.styles";
import WallpaperIcon from "@mui/icons-material/Wallpaper";
export default function UploadImagesBoardUI(
  props: IUploadImagesBoardUIProps
): JSX.Element {
  return (
    <>
      {props.imageUrl === "" ? (
        <S.UploadBoxContent onClick={props.onClickImageChoice}>
          <S.Img />
        </S.UploadBoxContent>
      ) : (
        <S.UploadImages
          src={`https://storage.googleapis.com/${props.imageUrl}`}
          alt=""
          onClick={props.onClickImageChoice}
        />
      )}
      <input
        type="file"
        onChange={props.onChangeFile}
        accept="image/*"
        ref={props.choiceRef}
        style={{ display: "none" }}
      />
    </>
  );
}
