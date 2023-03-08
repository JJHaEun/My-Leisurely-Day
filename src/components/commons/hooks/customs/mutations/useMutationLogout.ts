import { gql, useMutation } from "@apollo/client";
import type { IMutation } from "../../../../../commons/types/generated/types";

const LOGOUT_USER = gql`
  mutation {
    logoutUser
  }
`;

export const useMutationLogOut = () => {
  const [logoutUser] = useMutation<Pick<IMutation, "loginUser">>(LOGOUT_USER);
  return [logoutUser];
};
