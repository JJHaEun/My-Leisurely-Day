import { gql, useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchUseditemsIBoughtArgs,
} from "../../../../../commons/types/generated/types";

const FETCH_USED_ITEMS_I_BOUGHT = gql`
  query fetchUseditemsIBought($search: String, $page: Int) {
    fetchUseditemsIBought(search: $search, page: $page) {
      _id
      remarks
      name
      price
      images
      buyer {
        _id
        name
      }
    }
  }
`;

export const FetchIBought = () => {
  const { data: fetchIBought } = useQuery<
    Pick<IQuery, "fetchUseditemsIBought">,
    IQueryFetchUseditemsIBoughtArgs
  >(FETCH_USED_ITEMS_I_BOUGHT);
  return { fetchIBought };
};
