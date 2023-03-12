import { useForm } from "react-hook-form";
import { useOnClickCreateUpdateQuestion } from "../../../commons/hooks/useonClickCreateUpdateQuestion";
import { IPropsQuestion, IQuestionForm } from "./question.types";

export default function Question(props: IPropsQuestion): JSX.Element {
  const { register, handleSubmit, reset } = useForm<IQuestionForm>({
    // mode: "onChange",
  });
  const { onClickEditFinish, onCreateQuestion } =
    useOnClickCreateUpdateQuestion();

  return (
    <div>
      <div>
        <h1>{props.isEdit ? "수정" : "질문"}</h1>
      </div>
      <div>
        <form
          onSubmit={handleSubmit(
            props.isEdit
              ? onClickEditFinish(props.setIsEdit)(props.el)
              : (data) => onCreateQuestion(data, reset)
          )}
        >
          <div>
            <textarea {...register("contents")} />
            <button>{props.isEdit ? "수정" : "등록"}하기</button>
          </div>
        </form>
      </div>
    </div>
  );
}
