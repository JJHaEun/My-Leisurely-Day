/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { gql, useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationCreateUserArgs,
} from "../../../../../commons/types/generated/types";

const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
    }
  }
`;

export const useMutationCreateUser = () => {
  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);
  return [createUser];
};
