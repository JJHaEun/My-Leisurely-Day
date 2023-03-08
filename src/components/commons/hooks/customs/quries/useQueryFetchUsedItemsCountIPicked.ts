import { gql, useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchUseditemsIPickedArgs,
} from "../../../../../commons/types/generated/types";

const FETCH_USED_ITEMS_COUNT_I_PICKED = gql`
  query {
    fetchUseditemsCountIPicked
  }
`;

export const useQueryFetchUsedItemsCountIPicked = () => {
  const { data: IPicked } = useQuery<
    Pick<IQuery, "fetchUseditemsCountIPicked">,
    IQueryFetchUseditemsIPickedArgs
  >(FETCH_USED_ITEMS_COUNT_I_PICKED);

  return {
    IPicked,
  };
};
