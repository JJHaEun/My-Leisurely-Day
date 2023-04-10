import { useForm } from "react-hook-form";
import { CommentButton } from "../../../../commons/libraries/buttonCreate";
import {
  CommentBox,
  CommentTitleWrap,
  CommentWrap,
  EditOrBackWrap,
} from "../../../commons/commentsStyles/comments.styles";
import { useOnClickCreateUpdateQuestionAnswer } from "../../../commons/hooks/useOnclickCreateUpdateAnswer";
import AnswerList from "../answerList/answerList";
import { CreateAnswerFrom, IPropsAnswerWrite } from "./answer.types";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { onClickCancel } from "../../../commons/hooks/event/onClickCancel";

export default function Answer(props: IPropsAnswerWrite): JSX.Element {
  const { register, handleSubmit } = useForm<CreateAnswerFrom>();
  const { onClickEditAnswer, onCreateAnswer } =
    useOnClickCreateUpdateQuestionAnswer();
  const { Cancel } = onClickCancel(props.setIsEdit);

  return (
    <>
      <div>
        <CommentTitleWrap>
          <h1>{props.isEdit ? "답변수정" : "답변"}</h1>
        </CommentTitleWrap>
        <div>
          <form
            onSubmit={handleSubmit(
              props.isEdit
                ? onClickEditAnswer(props.elAnswer)(props.setIsEdit)
                : onCreateAnswer(props.elQuestion)
            )}
          >
            <CommentWrap>
              <CommentBox
                {...register("contents")}
                defaultValue={
                  props.elAnswer?.contents !== ""
                    ? props.elAnswer?.contents
                    : ""
                }
              />
              <EditOrBackWrap>
                {props.isEdit && (
                  <div onClick={Cancel}>
                    <KeyboardReturnIcon />
                  </div>
                )}
                <CommentButton>
                  {props.isEdit ? "수정" : "등록"}하기
                </CommentButton>
              </EditOrBackWrap>
            </CommentWrap>
          </form>
        </div>
      </div>
      <AnswerList elQuestion={props.elQuestion} />
    </>
  );
}
