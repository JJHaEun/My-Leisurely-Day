import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useMovePage } from "../../../components/commons/hooks/useMovePage";
import { IUseditem } from "../../types/generated/types";
import * as S from "./sidebar.styles";

export default function LayoutSideBar(): JSX.Element {
  const [todayList, setTodayList] = useState([]);
  const { onClickMoveTo } = useMovePage();
  useEffect(() => {
    const TodayLists = JSON.parse(String(sessionStorage.getItem("TodayLists")));

    if (TodayLists !== "") {
      setTodayList(TodayLists);
    }
  }, []);
  return (
    <S.SideWrap>
      <h1>최근 본 목록</h1>
      <div>
        {todayList
          ?.filter((_, i: number) => Number([i]) <= 2)
          .map((el: IUseditem) => (
            <S.Today key={el._id} onClick={onClickMoveTo(`/market/${el._id}`)}>
              <S.Name>{el.name}</S.Name>
              {el.images?.[0] !== undefined && el.images?.[0] !== "" ? (
                <div key={uuidv4()}>
                  <S.ProductImg
                    src={`https://storage.googleapis.com/${el.images?.[0]}`}
                    alt=""
                  />
                </div>
              ) : (
                <S.Default />
              )}
            </S.Today>
          ))}
      </div>
    </S.SideWrap>
  );
}
