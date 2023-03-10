import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { isEditState } from "../../../src/commons/stores";
import CreateEditMarket from "../../../src/components/market/write/createEditUsedItem";

export default function ProductPage(): JSX.Element {
  const [, setIsEdit] = useRecoilState(isEditState);
  // 여기서 분기처리. 해당 페이지에서 모달뜨게 하기.
  useEffect(() => {
    setIsEdit(false);
  }, []);
  return (
    <>
      <CreateEditMarket />
    </>
  );
}
