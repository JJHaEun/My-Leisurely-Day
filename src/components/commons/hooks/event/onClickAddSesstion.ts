import type { IUseditem } from "../../../../commons/types/generated/types";

export const onClickAddSesstion = () => {
  // const router = useRouter();
  const onClickAddTodayAndMove = (TodayList: IUseditem) => () => {
    // void router.push(`/market/${TodayList._id}`);
    const newPageUrl = `/market/${TodayList._id}`;
    window.location.href = newPageUrl;
    const TodayLists: IUseditem[] = JSON.parse(
      sessionStorage.getItem("TodayLists") ?? "[]"
    );
    const temp = TodayLists.filter((el) => el._id === TodayList._id);
    if (temp.length >= 1) {
      return;
    }

    TodayLists.unshift(TodayList);
    sessionStorage.setItem("TodayLists", JSON.stringify(TodayLists));
  };

  return {
    onClickAddTodayAndMove,
  };
};
