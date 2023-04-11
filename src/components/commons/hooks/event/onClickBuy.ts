import { Modal } from "antd";
import { useRouter } from "next/router";
import { useMutationCreatePointTransactionOfBuyingAndSelling } from "../customs/mutations/useMutationCreatePointTransactionBuyingSelling";
import { FETCH_USER_LOGGED_IN } from "../customs/quries/useQueryFetchUserLoggedIn";

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
            query: FETCH_USER_LOGGED_IN,
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
