import { insertCommas } from "../../commons/libraries/price";
import { IUseditem } from "../../commons/types/generated/types";
import { useQueryFetchUsedItemsIPicked } from "../commons/hooks/customs/quries/useQueryFetchUsedItemsIPicked";
import * as S from "../commons/cart_pickStyles/cart.styles";
import { onClickPushMyBasket } from "../commons/hooks/event/onClickPushMyBasket";

export default function Picked(): JSX.Element {
  const { IPicked } = useQueryFetchUsedItemsIPicked();
  const { onClickBasket } = onClickPushMyBasket();
  return (
    <div>
      {IPicked?.fetchUseditemsIPicked.slice(0, 5).map((el: IUseditem) => (
        <S.MainSectionCart key={el._id}>
          <S.cartImgSection>
            {el.images?.[0] !== undefined && el.images?.[0] !== "" ? (
              <img
                src={`https://storage.googleapis.com/${el.images?.[0]}`}
                alt=""
              />
            ) : (
              <img src={`/default_product.png`} />
            )}
          </S.cartImgSection>
          <S.InfoSectionMain>
            <S.InfoSection1>
              <div>
                <span>{el.name}</span>
                <span>{el.seller?.name}</span>
              </div>
              <button onClick={onClickBasket(el)}>장바구니 추가</button>
            </S.InfoSection1>
            <section>
              <S.PriceWrap>
                <span>{insertCommas(Number(el.price))}</span>
                <span>원</span>
              </S.PriceWrap>
            </section>
          </S.InfoSectionMain>
        </S.MainSectionCart>
      ))}
    </div>
  );
}
