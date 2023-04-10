import { Dispatch, SetStateAction } from "react";

export const onClickCancel = (
  setIsEdit?: Dispatch<SetStateAction<boolean>>
) => {
  const Cancel = () => {
    setIsEdit?.((prev) => !prev);
  };
  return {
    Cancel,
  };
};
