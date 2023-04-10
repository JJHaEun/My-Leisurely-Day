import { useState } from "react";
import { MessageDate } from "../../../../commons/libraries/date";
import { onClickDeleteAnswer } from "../../../commons/hooks/event/onClickDeleteAnswer";
import { onClickEditOpen } from "../../../commons/hooks/event/onClickEditComment";
import { IPropsAnswerListItem } from "../answerWrite/answer.types";
import Answer from "../answerWrite/answerWrite";
import * as ST from "../../detail/usedItemDetail.styles";
import * as S from "../../../commons/commentsItemStyles/commentsItem.styles";
export default function AnswerListItem(
  props: IPropsAnswerListItem
): JSX.Element {
  const [isEdit, setIsEdit] = useState(false);
  const { onClickEdit } = onClickEditOpen();
  const { onClickDelete } = onClickDeleteAnswer();

  return (
    <>
      {!isEdit && (
        <S.CommentWrap>
          <S.ComTitle>
            <S.CommentMainTitle>
              <ST.MarketPicture>
                {props.elAnswer.user.picture !== "" &&
                props.elAnswer.user.picture !== undefined ? (
                  <S.UserProfile
                    src={`https://storage.googleapis.com/${String(
                      props.elAnswer.user.picture
                    )}`}
                  />
                ) : (
                  <S.DefaultUserProfile src={`/default_user.png`} />
                )}
              </ST.MarketPicture>
              <S.UsersInFo>
                <S.Name>{props.elAnswer.user.name}</S.Name>
                <S.Date>{MessageDate(props.elAnswer.createdAt)}</S.Date>
              </S.UsersInFo>
            </S.CommentMainTitle>
            <S.DeleteEditAnswers>
              <S.DeleteEditImg
                src={`/edit.png`}
                onClick={onClickEdit(setIsEdit)}
              />
              <S.DeleteEditImg
                src={`/delete.png`}
                onClick={onClickDelete(props.elAnswer._id)}
              />
            </S.DeleteEditAnswers>
          </S.ComTitle>
          <S.Contents>{props.elAnswer.contents}</S.Contents>
        </S.CommentWrap>
      )}
      {isEdit && (
        <Answer elAnswer={props.elAnswer} isEdit={true} setIsEdit={setIsEdit} />
      )}
    </>
  );
}
