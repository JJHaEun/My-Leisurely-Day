import { gql, useQuery } from "@apollo/client";
import type { IQuery } from "../../../../../commons/types/generated/types";

const FETCH_POINT_TRANSACTION_COUNT_OF_LOADING = gql`
  query {
    fetchPointTransactionsCountOfLoading
  }
`;

export const useQueryFetchPointTransactionCountOfLoading = () => {
  const { data } = useQuery<
    Pick<IQuery, "fetchPointTransactionsCountOfLoading">
  >(FETCH_POINT_TRANSACTION_COUNT_OF_LOADING);
  return {
    data,
  };
};
