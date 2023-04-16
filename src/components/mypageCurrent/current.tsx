import { useEffect, useState } from "react";
import { IUseditem } from "../../commons/types/generated/types";
import { useMovePage } from "../commons/hooks/useMovePage";
import * as ST from "../mypage/mypageMainBottom/mypageMainBottom.styles";

export default function CurrentList(): JSX.Element {
  const [todayList, setTodayList] = useState([]);
  const { onClickMoveTo } = useMovePage();
  useEffect(() => {
    const TodayLists = JSON.parse(String(sessionStorage.getItem("TodayLists")));

    if (TodayLists !== "") {
      setTodayList(TodayLists);
    }
  }, []);
  return (
    <ST.MainTitlePage>
      <ST.TodayMore>
        <h1>최근 조회한 상품 전체</h1>
      </ST.TodayMore>
      <ST.MainWrapCurrent>
        {todayList.map((el: IUseditem) => (
          <ST.MainSection onClick={onClickMoveTo(`/market/${el._id}`)}>
            <section>
              <ST.ProductName>{el.name}</ST.ProductName>
              <ST.ProductSellerName>{el.seller?.name}</ST.ProductSellerName>
            </section>
            <ST.ProductImgWrap>
              {el.images?.[0] !== undefined && el.images?.[0] !== "" ? (
                <ST.ProductImg
                  src={`https://storage.googleapis.com/${el.images?.[0]}`}
                  alt=""
                />
              ) : (
                <ST.ProductImg src={`/default_product.png`} />
              )}
            </ST.ProductImgWrap>
          </ST.MainSection>
        ))}
      </ST.MainWrapCurrent>
    </ST.MainTitlePage>
  );
}
