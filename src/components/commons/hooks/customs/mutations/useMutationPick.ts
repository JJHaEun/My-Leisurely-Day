import { gql, useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationToggleUseditemPickArgs,
} from "../../../../../commons/types/generated/types";

const TOGGLR_USED_ITEM_PICK = gql`
  mutation toggleUseditemPick($useditemId: ID!) {
    toggleUseditemPick(useditemId: $useditemId)
  }
`;

export const useMutationPick = () => {
  const [toggleUseditemPick] = useMutation<
    Pick<IMutation, "toggleUseditemPick">,
    IMutationToggleUseditemPickArgs
  >(TOGGLR_USED_ITEM_PICK);
  return [toggleUseditemPick];
};
