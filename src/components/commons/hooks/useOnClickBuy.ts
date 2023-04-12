import { Modal } from "antd";
import { useRouter } from "next/router";
import { useMutationCreatePointTransactionOfBuyingAndSelling } from "./customs/mutations/useMutationCreatePointTransactionBuyingSelling";
import { FETCH_USED_ITEMS_I_BOUGHT } from "./customs/quries/useQueryFetchUsedItemsIBought";
import { FETCH_USED_ITEMS_COUNT_I_BOUGHT } from "./customs/quries/useQueryyFetchUsedItemsCountIBought";

export const useOnClickBuy = () => {
  const [createPointTransactionOfBuyingAndSelling] =
    useMutationCreatePointTransactionOfBuyingAndSelling();
  const router = useRouter();

  const onClickBuy = async (): Promise<void> => {
    try {
      await createPointTransactionOfBuyingAndSelling({
        variables: {
          useritemId: String(router.query.productId),
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEMS_I_BOUGHT,
          },
          {
            query: FETCH_USED_ITEMS_COUNT_I_BOUGHT,
          },
        ],
      });
      Modal.success({ content: "구매완료!" });
    } catch (error) {
      if (error instanceof Error) Modal.info({ content: error.message });
    }
  };
  return {
    onClickBuy,
  };
};
