import { Dispatch, SetStateAction } from "react";
import { IUseditemQuestion } from "../../../../commons/types/generated/types";

export interface IQuestionForm {
  contents: string;
}
export interface IPrev {
  __ref: string;
}
export interface IPropsQuestionListItem {
  el: IUseditemQuestion;
}

export interface IPropsQuestion {
  el?: IUseditemQuestion;
  isEdit?: boolean;
  setIsEdit?: Dispatch<SetStateAction<boolean>>;
}
