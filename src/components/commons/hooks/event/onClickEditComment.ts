import { Dispatch, SetStateAction } from "react";

export const onClickEditOpen = () => {
  const onClickEdit =
    (setIsEdit: Dispatch<SetStateAction<boolean>>) => (): void => {
      setIsEdit((prev) => !prev);
    };
  return {
    onClickEdit,
  };
};
