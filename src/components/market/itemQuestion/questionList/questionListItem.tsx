import { useState } from "react";
import { MessageDate } from "../../../../commons/libraries/date";
import { useQueryFetchUserLoggedIn } from "../../../commons/hooks/customs/quries/useQueryFetchUserLoggedIn";
import { onClickDeleteQuestion } from "../../../onClickDeleteQuestion";
import { onClickEditOpen } from "../../../onClickEditComment";
import Answer from "../../itemAnswer/answerWrite/answerWrite";
import { IPropsQuestionListItem } from "../questionWrite/question.types";
import Question from "../questionWrite/questionWrite";

export default function QuestionListItem(
  props: IPropsQuestionListItem
): JSX.Element {
  const { data: user } = useQueryFetchUserLoggedIn();
  const [isEdit, setIsEdit] = useState(false);
  const { onClickEdit } = onClickEditOpen();
  const { onClickDelete } = onClickDeleteQuestion();
  const [open, setOpen] = useState(false);

  const openAnswer = () => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      <div>
        <div>
          <div>
            <div>
              {props.el.user.picture !== "" &&
              props.el.user.picture !== undefined ? (
                <img
                  src={`https://storage.googleapis.com/${String(
                    user?.fetchUserLoggedIn?.picture
                  )}`}
                />
              ) : (
                <div />
              )}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
              <div>{props.el.user.name}</div>
              <div>{MessageDate(props.el.createdAt)}</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 16 }}>
            <img src={`/edit.png`} onClick={onClickEdit(setIsEdit)} />
            <img src={`/delete.png`} onClick={onClickDelete(props.el._id)} />

            <button onClick={openAnswer}>답변</button>
          </div>
        </div>
        <div>{props.el.contents}</div>
      </div>
      {isEdit && <Question el={props.el} isEdit={true} setIsEdit={setIsEdit} />}
      {open && <Answer elQuestion={props.el} setOpen={setOpen} />}
    </>
  );
}
