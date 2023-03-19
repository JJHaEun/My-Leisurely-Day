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
      <h1>상품{isEdit ? "수정" : "등록"}</h1>
      <form
        onSubmit={handleSubmit(
          isEdit ? onClickUpdateUsedItem : onClickCreateUsedItem
        )}
      >
        <div>
          <label>상품명</label>
          <input
            role="name-input"
            type="text"
            placeholder="상품명을 작성해주세요"
            {...register("name")}
          />
          <div>{formState.errors.name?.message}</div>
        </div>
        <div>
          <label>상품요약</label>
          <input
            role="remarks-input"
            type="text"
            placeholder="상품요약을 작성해주세요"
            {...register("remarks")}
          />
          <div>{formState.errors.remarks?.message}</div>
        </div>
        <div>
          <label>판매 가격</label>
          <input
            role="price-input"
            type="text"
            placeholder="판매 가격을 입력해주세요"
            {...register("price")}
          />
        </div>
        <div>
          <label>상품내용</label>
          <div>{formState.errors.contents?.message}</div>
          {/* <input role="contents-input" type="text" {...register("contents")} /> */}
          {/* 테스트 코드위해 추가한 input */}
          {typeof window !== "undefined" && (
            <ReactQuill
              onChange={onChangeContents(setValue, trigger)}
              placeholder="상품을 설명해주세요"
              //   {...register("contents")}
              value={contents ? contents : data?.fetchUseditem.contents}
            />
          )}
        </div>
        <div>
          <label>태그입력</label>
          <input
            type="text"
            placeholder="#태그 #태그 #태그"
            {...register("tags")}
            defaultValue={data?.fetchUseditem.tags ?? ""}
          />
          <div></div>
        </div>
        <div>
          <label>거래위치</label>
          {/* 카카오맵 */}
          <KakaoMapWrite address={address} />
          <div>
            <input
              type="text"
              placeholder="07250"
              readOnly
              {...register("useditemAddress.zipcode")}
            />
            <button type="button" onClick={ToggleModal}>
              우편번호 검색
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
          <label>사진첨부</label>
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
        <button role="submit-button">{isEdit ? "수정" : "등록"}하기</button>
      </form>
    </div>
  );
}
