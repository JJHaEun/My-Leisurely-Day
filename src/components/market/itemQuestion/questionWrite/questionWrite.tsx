import { useForm } from "react-hook-form";
import { useOnClickCreateUpdateQuestion } from "../../../commons/hooks/useonClickCreateUpdateQuestion";
import { IPropsQuestion, IQuestionForm } from "./question.types";
import {
  CommentBox,
  CommentTitleWrap,
  CommentWrap,
  EditOrBackWrap,
} from "../../../commons/commentsStyles/comments.styles";
import { CommentButton } from "../../../../commons/libraries/buttonCreate";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { onClickCancel } from "../../../commons/hooks/event/onClickCancel";

export default function Question(props: IPropsQuestion): JSX.Element {
  const { register, handleSubmit, reset } = useForm<IQuestionForm>({
    // mode: "onChange",
  });
  const { onClickEditFinish, onCreateQuestion } =
    useOnClickCreateUpdateQuestion();
  const { Cancel } = onClickCancel(props.setIsEdit);

  return (
    <div>
      <CommentTitleWrap>
        <h1>{props.isEdit ? "수정" : "질문"}</h1>
      </CommentTitleWrap>

      <form
        onSubmit={handleSubmit(
          props.isEdit
            ? onClickEditFinish(props.setIsEdit)(props.el)
            : (data) => onCreateQuestion(data, reset)
        )}
      >
        <CommentWrap>
          <CommentBox
            {...register("contents")}
            defaultValue={props.el?.contents !== "" ? props.el?.contents : ""}
          />
          <EditOrBackWrap>
            {props.isEdit && (
              <div onClick={Cancel}>
                <KeyboardReturnIcon />
              </div>
            )}
            <CommentButton>{props.isEdit ? "수정" : "등록"}하기</CommentButton>
          </EditOrBackWrap>
        </CommentWrap>
      </form>
    </div>
  );
}
