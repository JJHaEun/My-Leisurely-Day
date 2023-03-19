import { useForm } from "react-hook-form";
import { useOnClickCreateUpdateQuestion } from "../../../commons/hooks/useonClickCreateUpdateQuestion";
import { IPropsQuestion, IQuestionForm } from "./question.types";
import * as S from "./question.styles";
export default function Question(props: IPropsQuestion): JSX.Element {
  const { register, handleSubmit, reset } = useForm<IQuestionForm>({
    // mode: "onChange",
  });
  const { onClickEditFinish, onCreateQuestion } =
    useOnClickCreateUpdateQuestion();

  return (
    <div>
      <S.CommentTitleWrap>
        <h1>{props.isEdit ? "수정" : "질문"}</h1>
      </S.CommentTitleWrap>

      <form
        onSubmit={handleSubmit(
          props.isEdit
            ? onClickEditFinish(props.setIsEdit)(props.el)
            : (data) => onCreateQuestion(data, reset)
        )}
      >
        <S.CommentWrap>
          <S.CommentBox {...register("contents")} />
          <S.CommentButton>
            {props.isEdit ? "수정" : "등록"}하기
          </S.CommentButton>
        </S.CommentWrap>
      </form>
    </div>
  );
}
