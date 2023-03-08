import { gql, useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchPointTransactionsOfLoadingArgs,
} from "../../../../../commons/types/generated/types";

const FETCH_POINT_TRANSACTION_OF_LOADING = gql`
  query fetchPointTransactionsOfLoading($search: String, $page: Int) {
    fetchPointTransactionsOfLoading(search: $search, page: $page) {
      _id
      amount
      balance
      status
      statusDetail
      createdAt
    }
  }
`;

export const useQueryFetchPointTransactionsOfLoading = () => {
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchPointTransactionsOfLoading">,
    IQueryFetchPointTransactionsOfLoadingArgs
  >(FETCH_POINT_TRANSACTION_OF_LOADING);
  return {
    data,
    fetchMore,
  };
};
