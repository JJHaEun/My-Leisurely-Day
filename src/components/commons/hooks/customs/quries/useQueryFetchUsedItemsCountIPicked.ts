import { gql, useQuery } from "@apollo/client";
import type { IQuery } from "../../../../../commons/types/generated/types";

export const FETCH_USED_ITEMS_COUNT_I_PICKED = gql`
  query {
    fetchUseditemsCountIPicked
  }
`;

export const useQueryFetchUsedItemsCountIPicked = () => {
  const { data: IPickedCount } = useQuery<
    Pick<IQuery, "fetchUseditemsCountIPicked">
  >(FETCH_USED_ITEMS_COUNT_I_PICKED);

  return {
    IPickedCount,
  };
};
