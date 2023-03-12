import { useForm } from "react-hook-form";
import { useOnClickCreateUpdateQuestionAnswer } from "../../../commons/hooks/useOnclickCreateUpdateAnswer";
import AnswerList from "../answerList/answerList";
import { CreateAnswerFrom, IPropsAnswerWrite } from "./answer.types";

export default function Answer(props: IPropsAnswerWrite): JSX.Element {
  const { register, handleSubmit } = useForm<CreateAnswerFrom>();
  const { onClickEditAnswer, onCreateAnswer } =
    useOnClickCreateUpdateQuestionAnswer();
  return (
    <>
      <div>
        <div>
          <h1>{props.isEdit ? "답변수정" : "답변"}</h1>
        </div>
        <div>
          <form
            onSubmit={handleSubmit(
              props.isEdit
                ? onClickEditAnswer(props.elAnswer)(props.setIsEdit)
                : onCreateAnswer(props.elQuestion)(props.setOpen)
            )}
          >
            <div>
              <textarea {...register("contents")} />
              <button>{props.isEdit ? "수정" : "등록"}하기</button>
            </div>
          </form>
        </div>
      </div>
      <AnswerList elQuestion={props.elQuestion} />
    </>
  );
}
