import { useEffect, useState } from "react";
import { IUseditem } from "../../../commons/types/generated/types";
import { useMovePage } from "../../commons/hooks/useMovePage";
import * as S from "./mypageMainBottom.styles";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

export default function MyPageMainBottom(): JSX.Element {
  const [todayList, setTodayList] = useState([]);
  const { onClickMoveTo } = useMovePage();
  useEffect(() => {
    const TodayLists = JSON.parse(String(sessionStorage.getItem("TodayLists")));

    if (TodayLists !== "") {
      setTodayList(TodayLists);
    }
  }, []);
  // style={{ height: 400, overflow: "auto" }}
  return (
    <S.MainTitle>
      <S.TodayMore>
        <h1>최근 조회한 상품</h1>
        <span onClick={onClickMoveTo(`/mypage/current`)}>
          <span>더보기</span>
          <ArrowForwardIosRoundedIcon />
        </span>
      </S.TodayMore>
      <S.MainWrap>
        {todayList?.slice(0, 5).map((el: IUseditem) => (
          <S.MainSection onClick={onClickMoveTo(`/market/${el._id}`)}>
            <section>
              <S.ProductName>{el.name}</S.ProductName>
              <S.ProductSellerName>{el.seller?.name}</S.ProductSellerName>
            </section>
            <S.ProductImgWrap>
              {el.images?.[0] !== undefined && el.images?.[0] !== "" ? (
                <S.ProductImg
                  src={`https://storage.googleapis.com/${el.images?.[0]}`}
                  alt=""
                />
              ) : (
                <S.ProductImg src={`/default_product.png`} />
              )}
            </S.ProductImgWrap>
          </S.MainSection>
        ))}
      </S.MainWrap>
    </S.MainTitle>
  );
}
