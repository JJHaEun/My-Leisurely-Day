import { useState } from "react";
import { MessageDate } from "../../../../commons/libraries/date";
import { onClickDeleteAnswer } from "../../../onClickDeleteAnswer";
import { onClickEditOpen } from "../../../onClickEditComment";
import { IPropsAnswerListItem } from "../answerWrite/answer.types";
import Answer from "../answerWrite/answerWrite";

export default function AnswerListItem(
  props: IPropsAnswerListItem
): JSX.Element {
  const [isEdit, setIsEdit] = useState(false);
  const { onClickEdit } = onClickEditOpen();
  const { onClickDelete } = onClickDeleteAnswer();

  return (
    <>
      <div>
        <div>
          <div>{props.elAnswer.user.name}</div>
          <div>{MessageDate(props.elAnswer.createdAt)}</div>
        </div>
        <div>
          <img src={`/edit.png`} onClick={onClickEdit(setIsEdit)} />
          <img
            src={`/delete.png`}
            onClick={onClickDelete(props.elAnswer._id)}
          />
        </div>
        <div>{props.elAnswer.contents}</div>
      </div>
      {isEdit && (
        <Answer elAnswer={props.elAnswer} isEdit={true} setIsEdit={setIsEdit} />
      )}
    </>
  );
}
