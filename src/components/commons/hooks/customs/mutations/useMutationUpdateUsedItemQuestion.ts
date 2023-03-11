import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationUpdateUseditemQuestionArgs,
} from "../../../../../commons/types/generated/types";

const UPDATE_USED_ITEM_QUESTION = gql`
  mutation updateUseditemQuestion(
    $updateUseditemQuestionInput: UpdateUseditemQuestionInput!
    $useditemQuestionId: ID!
  ) {
    updateUseditemQuestion(
      updateUseditemQuestionInput: $updateUseditemQuestionInput
      useditemQuestionId: $useditemQuestionId
    ) {
      _id
    }
  }
`;

export const useMutationUpdateUsedItemQuestion = () => {
  const [updateUseditemQuestion] = useMutation<
    Pick<IMutation, "updateUseditemQuestion">,
    IMutationUpdateUseditemQuestionArgs
  >(UPDATE_USED_ITEM_QUESTION);
  return [updateUseditemQuestion];
};
