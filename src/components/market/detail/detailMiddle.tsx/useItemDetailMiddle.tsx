import DOMPurify from "dompurify";
import QuestionList from "../../itemQuestion/questionList/questionList";
import Question from "../../itemQuestion/questionWrite/questionWrite";
import KakaoMapDetail from "../../kakao/kakaomapDetail/kakaoMapDetail";
import { IItemDetailProps } from "../usedItemDetail.types";
import * as S from "../usedItemDetail.styles";
import { ShopFilled } from "@ant-design/icons";

export default function DetailMarketMiddle(
  props: IItemDetailProps
): JSX.Element {
  return (
    <S.Under>
      <S.DetailWrap>
        <S.ProductDetailTitleWrap>
          <h1>상품정보</h1>
        </S.ProductDetailTitleWrap>
        <S.ContentsWrap>
          {typeof window !== "undefined" ? (
            <S.Contents
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  String(props.data?.fetchUseditem.contents)
                ),
              }}
            ></S.Contents>
          ) : (
            <div />
          )}
        </S.ContentsWrap>
        <S.Location>
          {/* 위치 아이콘 */}
          <label>거래지역</label>
        </S.Location>
        {props.data?.fetchUseditem.useditemAddress?.address !== undefined &&
        props.data?.fetchUseditem.useditemAddress?.address !== null &&
        props.data.fetchUseditem.useditemAddress.address !== "" ? (
          <KakaoMapDetail />
        ) : (
          <div>주소없음</div>
        )}
      </S.DetailWrap>
      <S.MarketInfoWrap>
        <S.MarketInFoTitleWrap>
          <S.MarketInFoTitle>상점정보</S.MarketInFoTitle>
        </S.MarketInFoTitleWrap>
        <S.InFoMain>
          <S.MarketPicture>
            {props.data?.fetchUseditem.seller?.picture !== "" &&
            props.data?.fetchUseditem.seller?.picture !== undefined ? (
              <S.MarketProfile
                src={`https://storage.googleapis.com/${String(
                  props.data?.fetchUseditem.seller?.picture
                )}`}
              />
            ) : (
              <S.DefaultMarketProfile src={`/default_shop.png`} />
              // 마켓 기본이미지
            )}
          </S.MarketPicture>
          <S.InFoUser>{props.data?.fetchUseditem.seller?.name}</S.InFoUser>
        </S.InFoMain>
        <Question />
        <QuestionList />
      </S.MarketInfoWrap>
    </S.Under>
  );
}
