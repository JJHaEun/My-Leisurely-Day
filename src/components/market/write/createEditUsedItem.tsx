import { Modal } from "antd";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { isEditState, isOpenState } from "../../../commons/stores";
import { useOnChangeAddress } from "../../commons/hooks/useOnChangeAddress";
import { useOnclickCreateUpdateUsedItem } from "../../commons/hooks/useonClickCreateUpdateItem";
import { useToggleModal } from "../../commons/hooks/useToggle";
import UploadImagesItem from "../../upload/uploadImgItems/Upload.container";
import KakaoMapWrite from "../kakao/kakaoWrite/kakaoMapWrite";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import DaumPostcodeEmbed from "react-daum-postcode";
import { useQueryFetchUsedItem } from "../../commons/hooks/customs/quries/useQueryFetchUsedItem";
import { IUseCreateForm } from "./createEditUsedItem.types";
import { useReactQuill } from "../../onChangeContents";
import { yupResolver } from "@hookform/resolvers/yup";
import { usedItemSchema } from "../../../commons/libraries/validations/usedItemValidation";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});
export default function CreateEditMarket(): JSX.Element {
  const { onChangeAddress, address } = useOnChangeAddress();
  const {
    onClickCreateUsedItem,
    onClickUpdateUsedItem,
    imageUrls,
    onChangeImageUrls,
  } = useOnclickCreateUpdateUsedItem();
  const { data } = useQueryFetchUsedItem();
  const { onChangeContents, contents } = useReactQuill();
  const { register, handleSubmit, formState, trigger, setValue } =
    useForm<IUseCreateForm>({
      resolver: yupResolver(usedItemSchema),
      mode: "onChange",
      defaultValues: {
        price:
          data?.fetchUseditem.price !== null ? data?.fetchUseditem.price : "",
        remarks: data?.fetchUseditem.remarks,
        contents: data?.fetchUseditem.contents ?? "",
        useditemAddress: {
          addressDetail:
            data?.fetchUseditem.useditemAddress?.addressDetail ?? "",
        },
      },

      values: {
        name: data?.fetchUseditem.name ? data.fetchUseditem.name : "",
        price:
          data?.fetchUseditem.price !== null ? data?.fetchUseditem.price : "",
        remarks: data?.fetchUseditem.remarks,

        useditemAddress: {
          address:
            data?.fetchUseditem?.useditemAddress?.address !== null &&
            data?.fetchUseditem?.useditemAddress?.address !== undefined
              ? data?.fetchUseditem.useditemAddress?.address
              : "",
          zipcode:
            data?.fetchUseditem?.useditemAddress?.zipcode !== null &&
            data?.fetchUseditem.useditemAddress?.zipcode !== undefined
              ? data?.fetchUseditem.useditemAddress?.zipcode
              : "",
          addressDetail:
            data?.fetchUseditem.useditemAddress?.addressDetail ?? "",
        },
      },
    });
  const [isEdit] = useRecoilState(isEditState);
  const [isOpen] = useRecoilState(isOpenState);
  const { ToggleModal } = useToggleModal();
  const onChange = onChangeAddress(setValue);

  useEffect(() => {
    setValue("contents", data?.fetchUseditem?.contents ?? "");
    setValue(
      "useditemAddress.address",
      data?.fetchUseditem.useditemAddress?.address ?? ""
    );
    // setAddress(data?.fetchUseditem.useditemAddress?.address ?? "");
  }, []);

  return (
    <div>
      {isOpen && (
        <Modal open={true} onCancel={ToggleModal}>
          <DaumPostcodeEmbed onComplete={onChange} />
        </Modal>
      )}
      <h1>??????{isEdit ? "??????" : "??????"}</h1>
      <form
        onSubmit={handleSubmit(
          isEdit ? onClickUpdateUsedItem : onClickCreateUsedItem
        )}
      >
        <div>
          <label>?????????</label>
          <input
            role="name-input"
            type="text"
            placeholder="???????????? ??????????????????"
            {...register("name")}
          />
          <div>{formState.errors.name?.message}</div>
        </div>
        <div>
          <label>????????????</label>
          <input
            role="remarks-input"
            type="text"
            placeholder="??????????????? ??????????????????"
            {...register("remarks")}
          />
          <div>{formState.errors.remarks?.message}</div>
        </div>
        <div>
          <label>?????? ??????</label>
          <input
            role="price-input"
            type="text"
            placeholder="?????? ????????? ??????????????????"
            {...register("price")}
          />
        </div>
        <div>
          <label>????????????</label>
          <div>{formState.errors.contents?.message}</div>
          <input role="contents-input" type="text" {...register("contents")} />
          {/* ????????? ???????????? ????????? input */}
          {typeof window !== "undefined" && (
            <ReactQuill
              onChange={onChangeContents(setValue, trigger)}
              placeholder="????????? ??????????????????"
              //   {...register("contents")}
              value={contents ? contents : data?.fetchUseditem.contents}
            />
          )}
        </div>
        <div>
          <label>????????????</label>
          <input
            type="text"
            placeholder="#?????? #?????? #??????"
            {...register("tags")}
            defaultValue={data?.fetchUseditem.tags ?? ""}
          />
          <div></div>
        </div>
        <div>
          <label>????????????</label>
          {/* ???????????? */}
          <KakaoMapWrite address={address} />
          <div>
            <input
              type="text"
              placeholder="07250"
              readOnly
              {...register("useditemAddress.zipcode")}
            />
            <button type="button" onClick={ToggleModal}>
              ???????????? ??????
            </button>
          </div>
          <div>
            <input type="text" {...register("useditemAddress.address")} />
            <input
              type="text"
              {...register("useditemAddress.addressDetail")}
              //   defaultValue={
              //     data?.fetchUseditem.useditemAddress?.addressDetail ?? ""
              //   }
            />
          </div>
        </div>
        <div>
          <label>????????????</label>
          {imageUrls.map((el, index) => (
            <div key={index}>
              <UploadImagesItem
                imageUrl={el}
                index={index}
                onChangeImageUrls={onChangeImageUrls}
              />
            </div>
          ))}
        </div>
        <button role="submit-button">{isEdit ? "??????" : "??????"}??????</button>
      </form>
    </div>
  );
}
