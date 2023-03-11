import { Dispatch, SetStateAction, useState } from "react";
import type { Address } from "react-daum-postcode";
import type { UseFormSetValue } from "react-hook-form";
import { IUseCreateForm } from "../../market/write/createEditUsedItem.types";
import { useToggleModal } from "./useToggle";

interface IUseOnChangeAddress {
  onChangeAddress: (
    setValue: UseFormSetValue<IUseCreateForm>
  ) => (data: Address) => void;
  address: string;
  setAddress: Dispatch<SetStateAction<string>>;
}
export const useOnChangeAddress = (): IUseOnChangeAddress => {
  const [address, setAddress] = useState("");

  const { ToggleModal } = useToggleModal();
  const onChangeAddress =
    (setValue: UseFormSetValue<IUseCreateForm>) =>
    (data: Address): void => {
      console.log(data);
      setValue("useditemAddress.address", data.address);
      setValue("useditemAddress.zipcode", data.zonecode);
      setAddress(data.address);
      ToggleModal();
    };

  return {
    onChangeAddress,
    address,
    setAddress,
  };
};
