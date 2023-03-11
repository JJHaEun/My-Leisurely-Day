import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemQuestionsArgs,
} from "../../../../../commons/types/generated/types";

export const FETCH_USED_ITEM_QUESTIONS = gql`
  query fetchUseditemQuestions($page: Int, $useditemId: ID!) {
    fetchUseditemQuestions(page: $page, useditemId: $useditemId) {
      _id
      contents
      createdAt
      user {
        _id
        name
        email
      }
    }
  }
`;

export const useQueryFetchUsedItemQuestion = () => {
  const { data } = useQuery<
    //여기도 아이디 넘겨받기
    Pick<IQuery, "fetchUseditemQuestions">,
    IQueryFetchUseditemQuestionsArgs
  >(FETCH_USED_ITEM_QUESTIONS);
  return {
    data,
  };
};
