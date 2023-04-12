import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemsIBoughtArgs,
} from "../../../../../commons/types/generated/types";

export const FETCH_USED_ITEMS_COUNT_I_BOUGHT = gql`
  query {
    fetchUseditemsCountIBought
  }
`;

export const useQueryFetchUsedItemsCountIBought = () => {
  const { data: fetchIBoughtCount } = useQuery<
    Pick<IQuery, "fetchUseditemsCountIBought">,
    IQueryFetchUseditemsIBoughtArgs
  >(FETCH_USED_ITEMS_COUNT_I_BOUGHT);
  return {
    fetchIBoughtCount,
  };
};
