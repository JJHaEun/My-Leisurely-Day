import { Modal } from "antd";
import { useRouter } from "next/router";
import { useMutationDeleteUsedItem } from "./customs/mutations/useMutationDeleteUsedItem";

interface IPrev {
  __ref: string;
}

export const useDeleteUsedItem = () => {
  const router = useRouter();
  const [deleteUseditem] = useMutationDeleteUsedItem();

  const onClickDelete = async (): Promise<void> => {
    try {
      await deleteUseditem({
        variables: {
          useditemId: String(router.query.usedItemId),
        },
        update(cache, { data }) {
          cache.modify({
            fields: {
              fetchUseditems: (prev: IPrev[], { readField }) => {
                // IPrev라는 타입의 배열이라는 말
                const deletedUseditemId = data?.deleteUseditem;
                const filteredPrev = prev.filter(
                  (el) => readField("_id", el) !== deletedUseditemId
                ); // 다른것만 필터링해줘// 필터된것들(삭제가 적용된..)
                // readField("_id",el) readField헤서 _id를 꺼내와줘. el에서
                return [...filteredPrev]; // 그런데, prev안의 el이 객체로 들어오지않음. __ref라는 키에 해당 주소만 가지고있음. 그래서 ._id가없고 이 주소를 타고가서 ._id를 찾아와야함.
              },
            },
          });
          Modal.success({ content: "성공적으로 삭제되었습니다" });

          void router.push(`/market`);
        },
      });
    } catch (error) {
      if (error instanceof Error) Modal.info({ content: error.message });
    }
  };
  return { onClickDelete };
};
