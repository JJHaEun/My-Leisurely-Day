import { gql, useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationDeleteUseditemArgs,
} from "../../../../../commons/types/generated/types";

const DELETE_USED_ITEM = gql`
  mutation deleteUseditem($useditemId: ID!) {
    deleteUseditem(useditemId: $useditemId)
  }
`;

export const useMutationDeleteUsedItem = () => {
  const [deleteUseditem] = useMutation<
    Pick<IMutation, "deleteUseditem">,
    IMutationDeleteUseditemArgs
  >(DELETE_USED_ITEM);
  return [deleteUseditem];
};
