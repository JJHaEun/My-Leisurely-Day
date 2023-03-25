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
    <div>
      <h2>최근본 목록</h2>
      <div>
        {todayList
          ?.filter((_, i: number) => Number([i]) <= 2)
          .map((el: IUseditem) => (
            <div key={el._id}>
              <h3 onClick={onClickMoveTo(`/market/${el._id}`)}>{el.name}</h3>
              <div>
                <span>{el.price}</span>
                <S.Remarks>{el.remarks}</S.Remarks>
              </div>

              {el.images?.[0] !== undefined && el.images?.[0] !== "" ? (
                <div key={uuidv4()}>
                  <img
                    src={`https://storage.googleapis.com/${el.images?.[0]}`}
                    alt=""
                    style={{ width: "30px" }}
                  />
                </div>
              ) : (
                <img src="/grayBox.png" alt="" style={{ width: "30px" }} />
              )}
            </div>
          ))}
      </div>
    </div>
  );
}
