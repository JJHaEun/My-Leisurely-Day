import { gql, useQuery } from "@apollo/client";
import type { IQuery } from "../../../../../commons/types/generated/types";

export const FETCH_USER_LOGGED_IN = gql`
  query {
    fetchUserLoggedIn {
      _id
      email
      name
      userPoint {
        _id
        amount
      }
      createdAt
      updatedAt
    }
  }
`;
export const useQueryFetchUserLoggedIn = () => {
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  return {
    data,
  };
};
