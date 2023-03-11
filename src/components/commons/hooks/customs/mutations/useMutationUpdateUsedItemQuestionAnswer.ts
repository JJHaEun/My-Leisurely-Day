import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationUpdateUseditemQuestionAnswerArgs,
} from "../../../../../commons/types/generated/types";

const UPDATE_USED_ITEM_QUSETION_ANSWER = gql`
  mutation updateUseditemQuestionAnswer(
    $useditemQuestionAnswerId: ID!
    $updateUseditemQuestionAnswerInput: UpdateUseditemQuestionAnswerInput!
  ) {
    updateUseditemQuestionAnswer(
      useditemQuestionAnswerId: $useditemQuestionAnswerId
      updateUseditemQuestionAnswerInput: $updateUseditemQuestionAnswerInput
    ) {
      _id
    }
  }
`;

export const useMutationUpdate = () => {
  const [updateUseditemQuestionAnswer] = useMutation<
    Pick<IMutation, "updateUseditemQuestionAnswer">,
    IMutationUpdateUseditemQuestionAnswerArgs
  >(UPDATE_USED_ITEM_QUSETION_ANSWER);
  return [updateUseditemQuestionAnswer];
};
