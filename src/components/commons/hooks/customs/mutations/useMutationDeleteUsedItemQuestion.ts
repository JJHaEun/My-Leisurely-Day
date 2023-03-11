import { gql, useMutation } from "@apollo/client";
import { IMutation } from "../../../../../commons/types/generated/types";

const DELETE_USED_ITEM_QUESTION = gql`
  mutation deleteUseditemQuestion($useditemQuestionId: ID!) {
    deleteUseditemQuestion(useditemQuestionId: $useditemQuestionId)
  }
`;

export const useMutationDeleteUsedItemQuestion = () => {
  const [deleteUseditemQuestion] = useMutation<
    Pick<IMutation, "deleteUseditemQuestion">
  >(DELETE_USED_ITEM_QUESTION);
  return [deleteUseditemQuestion];
};
