import { useState } from "react";
import { MessageDate } from "../../../../commons/libraries/date";
import { useQueryFetchUserLoggedIn } from "../../../commons/hooks/customs/quries/useQueryFetchUserLoggedIn";
import Answer from "../../itemAnswer/answerWrite/answerWrite";
import { IPropsQuestionListItem } from "../questionWrite/question.types";
import Question from "../questionWrite/questionWrite";
import * as S from "../../../commons/commentsItemStyles/commentsItem.styles";
import * as ST from "../../detail/usedItemDetail.styles";
import { onClickEditOpen } from "../../../commons/hooks/event/onClickEditComment";
import { onClickDeleteQuestion } from "../../../commons/hooks/event/onClickDeleteQuestion";
import { CommentButton } from "../../../../commons/libraries/buttonCreate";
import { AnswerWrap } from "./questionList.styles";

export default function QuestionListItem(
  props: IPropsQuestionListItem
): JSX.Element {
  const [isEdit, setIsEdit] = useState(false);
  const { onClickEdit } = onClickEditOpen();
  const { onClickDelete } = onClickDeleteQuestion();
  const [open, setOpen] = useState(false);

  const openAnswer = () => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      {!isEdit && (
        <S.CommentWrap>
          <S.ComTitle>
            <S.CommentMainTitle>
              <ST.MarketPicture>
                {props.el.user.picture !== "" &&
                props.el.user.picture !== undefined ? (
                  <S.UserProfile
                    src={`https://storage.googleapis.com/${String(
                      props.el.user.picture
                    )}`}
                  />
                ) : (
                  <S.DefaultUserProfile src={`/default_user.png`} />
                  // 유저기본이미지
                )}
              </ST.MarketPicture>
              <S.UsersInFo>
                <S.Name>{props.el.user.name}</S.Name>
                <S.Date>{MessageDate(props.el.createdAt)}</S.Date>
              </S.UsersInFo>
            </S.CommentMainTitle>
            <S.DeleteEditAnswers>
              <S.DeleteEditImg
                src={`/edit.png`}
                onClick={onClickEdit(setIsEdit)}
              />
              <S.DeleteEditImg
                src={`/delete.png`}
                onClick={onClickDelete(props.el._id)}
              />
            </S.DeleteEditAnswers>
          </S.ComTitle>

          <S.Contents>{props.el.contents}</S.Contents>
          <AnswerWrap>
            <CommentButton onClick={openAnswer}>답변</CommentButton>
          </AnswerWrap>
        </S.CommentWrap>
      )}
      {isEdit && <Question el={props.el} isEdit={true} setIsEdit={setIsEdit} />}
      {open && <Answer elQuestion={props.el} setOpen={setOpen} />}
    </>
  );
}
