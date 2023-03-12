import { Dispatch, SetStateAction } from "react";
import {
  IUseditemQuestion,
  IUseditemQuestionAnswer,
} from "../../../../commons/types/generated/types";

export interface IPropsAnswerWrite {
  elQuestion?: IUseditemQuestion;
  setOpen?: Dispatch<SetStateAction<boolean>>;
  elAnswer?: IUseditemQuestionAnswer;
  isEdit?: boolean;
  setIsEdit?: Dispatch<SetStateAction<boolean>>;
}
export interface IPropsAnswerList {
  elQuestion?: IUseditemQuestion;
}
export interface IPropsAnswerListItem {
  elAnswer: IUseditemQuestionAnswer;
}
export interface CreateAnswerFrom {
  contents: string;
}
