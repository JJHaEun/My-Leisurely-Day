import type { IPagiNationUIProps } from "./pagination.types";
import * as S from "./pagination.styles";

export default function PagiNationUI(props: IPagiNationUIProps): JSX.Element {
  return (
    <S.PaginationWrap>
      <S.MovePageBt onClick={props.onClickMovePrv}>
        <S.MovePrevBtMain />
      </S.MovePageBt>
      {new Array(10).fill(1).map(
        (_, index) =>
          props.startPage + index <= props.lastPage && (
            <S.PageNum
              key={props.startPage + index}
              id={String(props.startPage + index)}
              onClick={props.onClickPage}
              isActive={props.startPage + index === props.nowPage}
            >
              {props.startPage + index}
            </S.PageNum>
          )
      )}
      <S.MovePageBt
        onClick={props.onClickMoveNext}
        //  disabled={props.disAbledBt}
      >
        <S.MoveNextBtMain />
      </S.MovePageBt>
    </S.PaginationWrap>
  );
}
