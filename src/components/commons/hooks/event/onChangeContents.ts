import { useState } from "react";
import type { UseFormSetValue, UseFormTrigger } from "react-hook-form";
import { useQueryFetchUsedItem } from "../customs/quries/useQueryFetchUsedItem";
import { IUseCreateForm } from "../../../market/write/createEditUsedItem.types";

export const useReactQuill = () => {
  const [contents, setContents] = useState("");
  const { data } = useQueryFetchUsedItem();

  const onChangeContents =
    (
      setValue: UseFormSetValue<IUseCreateForm>,
      trigger: UseFormTrigger<IUseCreateForm>
    ) =>
    (value: string) => {
      setValue("contents", value === "<p><br></p>" ? "" : value);
      void trigger("contents");
      setContents(
        value === "<p><br></p>" ? data?.fetchUseditem.contents ?? "" : value
      );
    };
  return {
    onChangeContents,
    contents,
  };
};
