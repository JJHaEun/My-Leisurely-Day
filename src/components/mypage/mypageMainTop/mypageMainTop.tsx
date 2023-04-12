import { useEffect, useState } from "react";
import { useQueryFetchUsedItemsCountIPicked } from "../../commons/hooks/customs/quries/useQueryFetchUsedItemsCountIPicked";
import { useQueryFetchUserLoggedIn } from "../../commons/hooks/customs/quries/useQueryFetchUserLoggedIn";
import { useQueryFetchUsedItemsCountIBought } from "../../commons/hooks/customs/quries/useQueryyFetchUsedItemsCountIBought";
import { useOnClickLogout } from "../../commons/hooks/useOnclickLogOut";
import * as S from "./mypageMainTop.styles";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { ShoppingTwoTone } from "@ant-design/icons";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import { useMovePage } from "../../commons/hooks/useMovePage";

export default function MyPageMainTop(): JSX.Element {
  const { data } = useQueryFetchUserLoggedIn();
  const { fetchIBoughtCount } = useQueryFetchUsedItemsCountIBought();
  const { onClickLogout } = useOnClickLogout();
  const [IBought, setIBought] = useState(0);
  const { IPickedCount } = useQueryFetchUsedItemsCountIPicked();
  const { onClickMoveTo } = useMovePage();
  useEffect(() => {
    const basket = JSON.parse(String(localStorage.getItem("baskets")));
    setIBought(basket?.length);
  }, []);
  return (
    <S.MyPageMainWrap>
      {/* 메뉴를 선택하면 옆에 사이드바에서도 같은것 색나옴. id를 주고, 클릭한 id가 같으면 색을 칠하기. */}
      <S.MyMainSectionLeft>
        <S.MyMenuFlex>
          <S.Name>{data?.fetchUserLoggedIn.name}</S.Name>
          <S.Email>{data?.fetchUserLoggedIn.email}</S.Email>
        </S.MyMenuFlex>
        <button onClick={onClickLogout}>로그아웃</button>
      </S.MyMainSectionLeft>
      <S.MyInFos>
        <S.MyInFoMenu>
          <S.MyMenuFlex3 onClick={onClickMoveTo(`/charge`)}>
            <S.IconMenu>
              <CopyrightIcon />
              <span>포인트</span>
            </S.IconMenu>
            <span>{data?.fetchUserLoggedIn.userPoint?.amount} 원</span>
          </S.MyMenuFlex3>
          <S.MyMenuFlex3 onClick={onClickMoveTo(`/bought`)}>
            <S.IconMenu>
              <SellOutlinedIcon />
              <span>구매상품</span>
            </S.IconMenu>
            <span>{fetchIBoughtCount?.fetchUseditemsCountIBought} 개</span>
          </S.MyMenuFlex3>
        </S.MyInFoMenu>
        <S.MyInFoMenu2>
          <S.MyMenuFlex2 onClick={onClickMoveTo(`/cart`)}>
            <S.IconMenu>
              <ShoppingTwoTone />
              <span>장바구니</span>
            </S.IconMenu>
            <span>{IBought} 개</span>
          </S.MyMenuFlex2>
          <S.MyMenuFlex2 onClick={onClickMoveTo(`/picked`)}>
            <S.IconMenu>
              <S.IPicked />
              <span>위시리스트</span>
            </S.IconMenu>
            <span>{IPickedCount?.fetchUseditemsCountIPicked} 개</span>
          </S.MyMenuFlex2>
        </S.MyInFoMenu2>
      </S.MyInFos>
    </S.MyPageMainWrap>
  );
}
