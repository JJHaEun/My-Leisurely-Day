import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { isEditState } from "../../../src/commons/stores";
import { useAuth } from "../../../src/components/commons/hooks/useAuth";
import CreateEditMarket from "../../../src/components/market/write/createEditUsedItem";

export default function ProductPage(): JSX.Element {
  const [, setIsEdit] = useRecoilState(isEditState);
  useAuth();
  useEffect(() => {
    setIsEdit(false);
  }, []);
  return (
    <>
      <CreateEditMarket />
    </>
  );
}
