import { gql, useQuery } from "@apollo/client";
// import { Modal } from "antd";
import { useRouter } from "next/router";
import type {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../../commons/types/generated/types";

export const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      useditemAddress {
        _id
        zipcode
        address
        addressDetail
      }
      seller {
        _id
        email
        name
      }
      createdAt
    }
  }
`;
interface IuseQueryFetchUsedItem {
  data?: Pick<IQuery, "fetchUseditem">;
}

export const useQueryFetchUsedItem = (): IuseQueryFetchUsedItem => {
  const router = useRouter();

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: {
      useditemId: String(router.query.productId),
    },
  });

  return { data };
};
