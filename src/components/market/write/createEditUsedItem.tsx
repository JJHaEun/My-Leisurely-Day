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
import "react-quill/dist/quill.snow.css";
import DaumPostcodeEmbed from "react-daum-postcode";
import { useQueryFetchUsedItem } from "../../commons/hooks/customs/quries/useQueryFetchUsedItem";
import { IUseCreateForm } from "./createEditUsedItem.types";
import { useReactQuill } from "../../onChangeContents";
import { yupResolver } from "@hookform/resolvers/yup";
import { usedItemSchema } from "../../../commons/libraries/validations/usedItemValidation";
import * as S from "./createEditUsedItem.styles";
import * as ST from "../../../commons/libraries/buttonCreate";
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
      <form
        onSubmit={handleSubmit(
          isEdit ? onClickUpdateUsedItem : onClickCreateUsedItem
        )}
      >
        <S.NamePrice>
          <S.ImportGroup>
            <label>상품명</label>
            <S.InputNamePrice
              role="name-input"
              type="text"
              placeholder="상품명을 작성해주세요"
              {...register("name")}
            />
            <S.ErrMessage>{formState.errors.name?.message}</S.ErrMessage>
          </S.ImportGroup>
          <S.ImportGroup>
            <label>판매 가격</label>
            <S.InputNamePrice
              role="price-input"
              type="text"
              placeholder="판매 가격을 입력해주세요"
              {...register("price")}
            />
            <S.ErrMessage>{formState.errors.price?.message}</S.ErrMessage>
          </S.ImportGroup>
        </S.NamePrice>
        <S.ImportGroup>
          <label>상품요약</label>
          <S.Input
            role="remarks-input"
            type="text"
            placeholder="상품요약을 작성해주세요"
            {...register("remarks")}
          />
          <S.ErrMessage>{formState.errors.remarks?.message}</S.ErrMessage>
        </S.ImportGroup>
        <S.ImportGroup>
          <label>상품내용</label>
          <S.ErrMessage>{formState.errors.contents?.message}</S.ErrMessage>
          {/* <input role="contents-input" type="text" {...register("contents")} /> */}
          {/* 테스트 코드위해 추가한 input */}
          {typeof window !== "undefined" && (
            <S.ContentsBox
              onChange={onChangeContents(setValue, trigger)}
              placeholder="상품을 설명해주세요"
              //   {...register("contents")}
              value={contents ? contents : data?.fetchUseditem.contents}
            />
          )}
        </S.ImportGroup>
        <S.TagGroup>
          <label>태그입력</label>
          <S.TagInput
            type="text"
            placeholder="#태그 #태그 #태그"
            {...register("tags")}
            defaultValue={data?.fetchUseditem.tags ?? ""}
          />
        </S.TagGroup>
        <S.Location>
          <S.MapWrap>
            <label>거래위치</label>
            <KakaoMapWrite address={address} />
          </S.MapWrap>
          <S.AddressGroup>
            <S.AddressSearchGroup>
              <input
                type="text"
                placeholder="07250"
                readOnly
                {...register("useditemAddress.zipcode")}
              />
              <button type="button" onClick={ToggleModal}>
                우편번호 검색
              </button>
            </S.AddressSearchGroup>
            <S.AddressInputGroup>
              <input type="text" {...register("useditemAddress.address")} />
              <input
                type="text"
                {...register("useditemAddress.addressDetail")}
                //   defaultValue={
                //     data?.fetchUseditem.useditemAddress?.addressDetail ?? ""
                //   }
              />
            </S.AddressInputGroup>
          </S.AddressGroup>
        </S.Location>
        <S.PhotoWrap>
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
        </S.PhotoWrap>
        <ST.CommentButton role="submit-button">
          {isEdit ? "수정" : "등록"}하기
        </ST.CommentButton>
      </form>
    </div>
  );
}
