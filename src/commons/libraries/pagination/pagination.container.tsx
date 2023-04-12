import type { MouseEvent } from "react";
import { useState } from "react";

import PagiNationUI from "./pagination.presenter";
import type { IPagiNationPageProps } from "./pagination.types";

export default function PagiNationPage(
  props: IPagiNationPageProps
): JSX.Element {
  const [startPage, setStartPage] = useState(1);
  const [nowPage, setNowPage] = useState(1);
  // const [disAbledBt, setDisAbledBt] = useState(false);

  const lastPage = Math.ceil((props.countIBought ?? 10) / 10);
  // const endPage = lastPage % 10;
  const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
    const currentPage = Number(event.currentTarget.id);
    setNowPage(currentPage);
    void props.refetch({ page: currentPage });
  };

  const onClickMovePrv = (): void => {
    // setDisAbledBt(false);
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
    // setStartPage(startPage - 10);
    setNowPage((prev) => prev - 10);
    // setNowPage(startPage - 10);
    // void props.refetch({ page: nowPage - 10 });
    void props.refetch({ page: startPage - 10 });
  };

  const onClickMoveNext = (): void => {
    if (startPage + 10 <= lastPage) {
      setStartPage((prev) => prev + 10);
      // setStartPage(startPage + 10);
      setNowPage((prev) => prev + 10);
      // setNowPage(startPage + 10);
      // void props.refetch({ page: nowPage + 10 });
      void props.refetch({ page: startPage + 10 });
    }
    // if (startPage + 10 > lastPage - endPage) {
    //   setDisAbledBt(true);
    // }
  };
  return (
    <>
      <PagiNationUI
        onClickMovePrv={onClickMovePrv}
        onClickMoveNext={onClickMoveNext}
        startPage={startPage}
        nowPage={nowPage}
        onClickPage={onClickPage}
        lastPage={lastPage}
        // disAbledBt={disAbledBt}
      />
    </>
  );
}
