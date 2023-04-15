import { useEffect, useState } from "react";
import { IUseditem } from "../../../commons/types/generated/types";
import { useMovePage } from "../../commons/hooks/useMovePage";

export default function MyPageMainBottom(): JSX.Element {
  const [todayList, setTodayList] = useState([]);
  const { onClickMoveTo } = useMovePage();
  useEffect(() => {
    const TodayLists = JSON.parse(String(sessionStorage.getItem("TodayLists")));

    if (TodayLists !== "") {
      setTodayList(TodayLists);
    }
  }, []);
  return (
    <>
      {todayList.slice(0, 5).map((el: IUseditem) => (
        <section>
          <section>
            <h1>{el.name}</h1>
            <span>더보기 </span>
          </section>
          <section>
            {el.images?.[0] !== undefined && el.images?.[0] !== "" ? (
              <img
                src={`https://storage.googleapis.com/${el.images?.[0]}`}
                alt=""
              />
            ) : (
              <img src={`/default_product.png`} />
            )}
          </section>
        </section>
      ))}
    </>
  );
}
