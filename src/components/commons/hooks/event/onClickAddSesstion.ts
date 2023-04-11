import type { IUseditem } from "../../../../commons/types/generated/types";

export const onClickAddSesstion = () => {
  const onClickAddTodayAndMove = (TodayList: IUseditem) => () => {
    const newPageUrl = `/market/${TodayList._id}`;
    window.location.href = newPageUrl;
    const TodayLists: IUseditem[] = JSON.parse(
      sessionStorage.getItem("TodayLists") ?? "[]"
    );

    const { __typename, ...newTodayList } = TodayList; // __typename을 제외하고 나머지를 newBasket이라는 이름으로뽑아옴.( 관례는 ...rest )
    TodayLists.unshift(newTodayList);
    sessionStorage.setItem("TodayLists", JSON.stringify(TodayLists));
  };

  return {
    onClickAddTodayAndMove,
  };
};
