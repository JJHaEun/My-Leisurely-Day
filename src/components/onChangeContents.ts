import type { UseFormSetValue, UseFormTrigger } from "react-hook-form";
import { IUseCreateForm } from "./market/write/createEditUsedItem.types";

export const useReactQuill = () => {
  const onChangeContents =
    (
      setValue: UseFormSetValue<IUseCreateForm>,
      trigger: UseFormTrigger<IUseCreateForm>
    ) =>
    (value: string) => {
      setValue("contents", value === "<p><br></p>" ? "" : value);
      void trigger("contents");
    };
  return {
    onChangeContents,
  };
};
