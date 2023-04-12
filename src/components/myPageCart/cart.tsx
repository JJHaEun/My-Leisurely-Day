import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { insertCommas } from "../../commons/libraries/price";
import { IUseditem } from "../../commons/types/generated/types";
import { useMovePage } from "../commons/hooks/useMovePage";
import { useOnClickPick } from "../commons/hooks/useOnlickPick";
import * as S from "../commons/cart_pickStyles/cart.styles";

export default function Cart(): JSX.Element {
  // 장바구니
  const [cart, setCart] = useState([]);
  const { onClickPick } = useOnClickPick();
  const { onClickMoveTo } = useMovePage();
  const router = useRouter();

  useEffect(() => {
    const carts = JSON.parse(String(localStorage.getItem("baskets")));
    if (carts !== "") {
      setCart(carts);
    }
  }, []);

  return (
    <div>
      {cart.map((el: IUseditem) => (
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
              <div onClick={onClickMoveTo(`/market/${el._id}`)}>
                <span>{el.name}</span>
                <span>{el.seller?.name}</span>
              </div>
              <button onClick={onClickPick(el._id)}>위시리스트 추가</button>
            </S.InfoSection1>
            <section>
              <span>{insertCommas(Number(el.price))} 원</span>
            </section>
          </S.InfoSectionMain>
        </S.MainSectionCart>
      ))}
    </div>
  );
}
