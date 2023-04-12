import { gql, useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchUseditemsIBoughtArgs,
} from "../../../../../commons/types/generated/types";

export const FETCH_USED_ITEMS_I_BOUGHT = gql`
  query fetchUseditemsIBought($search: String, $page: Int) {
    fetchUseditemsIBought(search: $search, page: $page) {
      _id
      remarks
      name
      price
      images
      seller {
        _id
        name
      }
    }
  }
`;

export const useQueryFetchUsedItemsIBought = () => {
  const { data: fetchIBought, refetch } = useQuery<
    Pick<IQuery, "fetchUseditemsIBought">,
    IQueryFetchUseditemsIBoughtArgs
  >(FETCH_USED_ITEMS_I_BOUGHT, {
    variables: {
      page: 1,
      search: "",
    },
  });
  return {
    fetchIBought,
    refetch,
  };
};
