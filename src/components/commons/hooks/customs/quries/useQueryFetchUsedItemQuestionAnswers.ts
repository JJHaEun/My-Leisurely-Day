import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemQuestionAnswersArgs,
} from "../../../../../commons/types/generated/types";

export const FETCH_USED_ITEM_QUESTION_ANSWERS = gql`
  query fetchUseditemQuestionAnswers($page: Int, $useditemQuestionId: ID!) {
    fetchUseditemQuestionAnswers(
      page: $page
      useditemQuestionId: $useditemQuestionId
    ) {
      _id
      contents
      createdAt
      user {
        name
      }
    }
  }
`;

export const useQueryFetchUsedItemQuestionAnswers = () => {
  // 아이디 넘겨받기 const {data} = useQueryFetchUsedItemQuestionAnswers(props.el._id) => 얘를 여기 소괄호에 받기.냠.
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditemQuestionAnswers">,
    IQueryFetchUseditemQuestionAnswersArgs
  >(FETCH_USED_ITEM_QUESTION_ANSWERS);
  return {
    data,
  };
};
