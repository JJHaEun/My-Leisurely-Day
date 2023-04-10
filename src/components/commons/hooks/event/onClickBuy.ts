import { Modal } from "antd";
import { useRouter } from "next/router";
import { useMutationCreatePointTransactionOfBuyingAndSelling } from "../customs/mutations/useMutationCreatePointTransactionBuyingSelling";

export const useOnClickBuy = () => {
  const [createPointTransactionOfBuyingAndSelling] =
    useMutationCreatePointTransactionOfBuyingAndSelling();
  const router = useRouter();

  const onClickBuy = async (): Promise<void> => {
    if (typeof router.query.usedItemId !== "string") {
      Modal.info({ content: "다시시도해주세요" });
      return;
    }
    try {
      await createPointTransactionOfBuyingAndSelling({
        variables: {
          useritemId: router.query.usedItemId,
        },
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
