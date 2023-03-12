import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemQuestionAnswersArgs,
  IUseditemQuestion,
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

export const useQueryFetchUsedItemQuestionAnswers = (
  useditemQuestion?: IUseditemQuestion
) => {
  // 아이디 넘겨받기 const {data} = useQueryFetchUsedItemQuestionAnswers(props.el._id) => 얘를 여기 소괄호에 받기.냠.
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditemQuestionAnswers">,
    IQueryFetchUseditemQuestionAnswersArgs
  >(FETCH_USED_ITEM_QUESTION_ANSWERS, {
    variables: {
      useditemQuestionId: String(useditemQuestion?._id),
    },
  });
  const onLoadMore = (): void => {
    if (data === undefined) return;
    void fetchMore({
      variables: {
        page:
          Math.ceil((data.fetchUseditemQuestionAnswers.length ?? 10) / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (
          fetchMoreResult.fetchUseditemQuestionAnswers === undefined ||
          fetchMoreResult.fetchUseditemQuestionAnswers.length === 0
        ) {
          return {
            fetchUseditemQuestionAnswers: [
              ...(prev.fetchUseditemQuestionAnswers ?? []),
            ],
          };
        }
        return {
          fetchUseditemQuestionAnswers: [
            ...(prev.fetchUseditemQuestionAnswers ?? []),
            ...fetchMoreResult.fetchUseditemQuestionAnswers,
          ],
        };
      },
    });
  };
  return {
    data,
    onLoadMore,
  };
};
