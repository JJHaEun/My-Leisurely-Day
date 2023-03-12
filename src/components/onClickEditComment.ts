import { Dispatch, SetStateAction, useState } from "react";

export const onClickEditOpen = () => {
  //   const [, setIsEdit] = useState(false);

  const onClickEdit =
    (setIsEdit: Dispatch<SetStateAction<boolean>>) => (): void => {
      setIsEdit((prev) => !prev);
    };
  return {
    onClickEdit,
  };
};
