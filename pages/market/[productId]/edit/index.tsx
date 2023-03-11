import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { isEditState } from "../../../../src/commons/stores";
import CreateEditMarket from "../../../../src/components/market/write/createEditUsedItem";

export default function ProductEditPage(): JSX.Element {
  const [, setIsEdit] = useRecoilState(isEditState);
  useEffect(() => {
    setIsEdit(true);
  }, []);
  return (
    <>
      <CreateEditMarket />
    </>
  );
}
