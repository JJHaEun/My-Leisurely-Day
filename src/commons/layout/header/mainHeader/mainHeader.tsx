import { Badge } from "antd";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { useQueryFetchUserLoggedIn } from "../../../../components/commons/hooks/customs/quries/useQueryFetchUserLoggedIn";
import { useMovePage } from "../../../../components/commons/hooks/useMovePage";
import { useOnClickLogout } from "../../../../components/commons/hooks/useOnclickLogOut";
import { insertCommas } from "../../../libraries/price";
import { accessTokenState } from "../../../stores";
import { IUseditem } from "../../../types/generated/types";
import * as S from "./mainHeader.styles";
import * as ST from "../singIninAndSignUpHeader/singIninAndSignUpHeader.styles";

export default function MainHeader(): JSX.Element {
  const [accessToken] = useRecoilState(accessTokenState);
  const { data: user } = useQueryFetchUserLoggedIn();
  const [basket, setBasket] = useState(0);
  const { onClickMoveTo } = useMovePage();
  const { onClickLogout } = useOnClickLogout();

  useEffect(() => {
    const baskets: IUseditem[] = JSON.parse(
      localStorage.getItem("baskets") ?? "[]"
    );
    setBasket(baskets.length);
  }, []);

  return (
    <S.MainHeaderWrap>
      <ST.SiteTitle onClick={onClickMoveTo(`/`)}>느린하루</ST.SiteTitle>
      <S.MenuWrap>
        {accessToken !== "" && (
          <S.UserInFo>
            <S.UserMain>
              <S.UserName>{user?.fetchUserLoggedIn.name} 님</S.UserName>
              <S.UserPointWrap>
                <S.UserPointAmount>
                  {insertCommas(
                    Number(user?.fetchUserLoggedIn.userPoint?.amount)
                  )}
                </S.UserPointAmount>
                <S.Point_P>P</S.Point_P>
              </S.UserPointWrap>
              <S.UsersChoiceWrap>
                <span>충전</span>
                <S.Menus onClick={onClickLogout}>로그아웃</S.Menus>
              </S.UsersChoiceWrap>
            </S.UserMain>
            <div>
              <span>
                <Badge count={basket !== 0 ? basket : 0} overflowCount={10}>
                  <div> 장바구니</div>
                </Badge>
              </span>
            </div>
          </S.UserInFo>
        )}
      </S.MenuWrap>{" "}
      {!accessToken && (
        <S.UnUsersChoiceWrap>
          <></>
          <S.UsersChoiceWrap>
            <span onClick={onClickMoveTo(`/market/signIn`)}>로그인</span>
            <span onClick={onClickMoveTo(`/market/signUp`)}>회원가입</span>
          </S.UsersChoiceWrap>
        </S.UnUsersChoiceWrap>
      )}
    </S.MainHeaderWrap>
  );
}
