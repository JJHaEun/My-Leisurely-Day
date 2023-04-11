import { useQueryFetchUsedItem } from "../../commons/hooks/customs/quries/useQueryFetchUsedItem";
import { v4 as uuidv4 } from "uuid";
import { insertCommas } from "../../../commons/libraries/price";
import DetailMarketMiddle from "./detailMiddle.tsx/useItemDetailMiddle";
import * as S from "./usedItemDetail.styles";
import { useMovePage } from "../../commons/hooks/useMovePage";
import { useRouter } from "next/router";
import { useDeleteUsedItem } from "../../commons/hooks/useOnclickDelete";
import { onClickPushMyBasket } from "../../commons/hooks/event/onClickPushMyBasket";
import { useOnClickBuy } from "../../commons/hooks/event/onClickBuy";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useOnClickPick } from "../../commons/hooks/useOnlickPick";
export default function DetailMarket(): JSX.Element {
  const router = useRouter();
  const { data } = useQueryFetchUsedItem();
  const { onClickMoveTo } = useMovePage();
  const { onClickDelete } = useDeleteUsedItem();
  const { onClickBasket } = onClickPushMyBasket();
  const { onClickBuy } = useOnClickBuy();
  const { onClickPick } = useOnClickPick();

  return (
    <S.TopMainWrap>
      <S.Upmain>
        <S.ImgMainBoxWrap>
          {data?.fetchUseditem.images?.filter((el) => el).length !==
            undefined &&
          data?.fetchUseditem.images?.filter((el) => el).length > 0 ? (
            data?.fetchUseditem.images
              ?.filter((el) => el)
              .map((el) => (
                <div key={uuidv4()}>
                  <S.CarouselWrap autoplay dots={true}>
                    {el !== "" ? (
                      <S.ImgMainImg
                        src={`https://storage.googleapis.com/${el}`}
                        // style={contentStyle}
                      />
                    ) : (
                      <S.ImgBox />
                    )}
                  </S.CarouselWrap>
                </div>
              ))
          ) : (
            <S.DefaultImgBox>
              <img src={`/default_product.png`} />
            </S.DefaultImgBox>
          )}
        </S.ImgMainBoxWrap>
        <S.ItemWrap>
          <S.ItemTitleWrap>
            <S.INameWrap>
              <S.ItemName>
                {data?.fetchUseditem ? data?.fetchUseditem.name : <>zhzh</>}
              </S.ItemName>
              <S.EditDeletWrap>
                <img
                  src={`/edit.png`}
                  onClick={onClickMoveTo(
                    `/market/${String(router.query.productId)}/edit`
                  )}
                />
                <img src={`/delete.png`} onClick={onClickDelete} />
              </S.EditDeletWrap>
            </S.INameWrap>
            <S.PriceWrap>
              <S.Price>
                {insertCommas(Number(data?.fetchUseditem.price))}
              </S.Price>
            </S.PriceWrap>
          </S.ItemTitleWrap>

          <div>
            <S.RemarksWrap>
              <S.Remarks>{data?.fetchUseditem.remarks}</S.Remarks>
            </S.RemarksWrap>
            <S.TagsWrap>
              {data?.fetchUseditem.tags !== null &&
                data?.fetchUseditem.tags !== undefined &&
                data?.fetchUseditem.tags?.map((el) => (
                  // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
                  <S.Tags key={uuidv4() + 1}>
                    {el.replaceAll(el, `# ${el}`).split(" ")}
                  </S.Tags>
                ))}
            </S.TagsWrap>
            <S.ButtonWrap>
              <S.Back onClick={onClickMoveTo(`/market`)}>뒤로가기</S.Back>
              <S.PickBt
                picked={Number(data?.fetchUseditem.pickedCount)}
                onClick={onClickPick(String(data?.fetchUseditem._id))}
              >
                <S.IPickIcon />
                <S.Pickcount>{data?.fetchUseditem.pickedCount}</S.Pickcount>
              </S.PickBt>
              <S.PushMyBasket
                onClick={() => {
                  data?.fetchUseditem !== null &&
                    onClickBasket(data?.fetchUseditem)();
                }}
              >
                <ShoppingCartIcon />
                장바구니
              </S.PushMyBasket>
              <S.Buy onClick={onClickBuy}>구매하기</S.Buy>
            </S.ButtonWrap>
          </div>
        </S.ItemWrap>
      </S.Upmain>
      <DetailMarketMiddle data={data} />
    </S.TopMainWrap>
  );
}
