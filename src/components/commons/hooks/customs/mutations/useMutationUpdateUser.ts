import { gql, useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationUpdateUserArgs,
} from "../../../../../commons/types/generated/types";

const UPDATE_USER = gql`
  mutation updateUser($updateUserInput: UpdateUserInput!) {
    updateUser(updateUserInput: $updateUserInput) {
      _id
    }
  }
`;

export const useMutationUpdateUser = () => {
  const [updateUser] = useMutation<
    Pick<IMutation, "updateUser">,
    IMutationUpdateUserArgs
  >(UPDATE_USER);
  return [updateUser];
};
