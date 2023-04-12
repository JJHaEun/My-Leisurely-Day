import { useMovePage } from "../../commons/hooks/useMovePage";
import * as S from "./mypageSide.styles";

export default function MyPageSide(): JSX.Element {
  const { onClickMoveTo } = useMovePage();

  return (
    <S.MyMenuSide>
      <ul>
        <li>
          <S.Home />
          <span onClick={onClickMoveTo(`/mypage`)}>마이 홈</span>
        </li>
      </ul>
      <ul>
        <li>
          <S.Menu />
          <span>상품</span>
        </li>
        <ul>
          <dl onClick={onClickMoveTo(`/picked`)}>위시리스트</dl>
          <dl onClick={onClickMoveTo(`/cart`)}>장바구니</dl>
        </ul>
      </ul>
      <ul>
        <li>
          <S.Buy />
          <span>구매</span>
        </li>
        <ul>
          <dl onClick={onClickMoveTo(`/bought`)}>구매 내역</dl>
          {/* 구매내역의미 fetchPointTransactionsOfBuying */}
          <dl onClick={onClickMoveTo(`/charge`)}>포인트</dl>
          {/* 포인트에서는 포인트 충전내역 fetchPointTransactionsOfLoading*/}
        </ul>
      </ul>
      <ul>
        <li>
          <S.Personal />
          <span>개인</span>
        </li>
        <ul>
          <dl>정보 변경</dl>
        </ul>
      </ul>
    </S.MyMenuSide>
  );
}
