import type { ChangeEvent, RefObject } from "react";

export interface UploadImagesBoardProps {
  onChangeImageUrls: (imageUrl: string, index: number) => void;
  index: number;
  imageUrl: string;
}
export interface IUploadImagesBoardUIProps {
  onClickImageChoice: () => void;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
  choiceRef: RefObject<HTMLInputElement>;
  imageUrl: string;
}
