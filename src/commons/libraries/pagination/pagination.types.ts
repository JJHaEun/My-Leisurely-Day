import type { ApolloQueryResult } from "@apollo/client";
import type { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchUseditemsIBoughtArgs,
} from "../../types/generated/types";

export interface IPagiNationPageProps {
  refetch: (
    variables?: Partial<IQueryFetchUseditemsIBoughtArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditemsIBought">>>;
  countIBought?: number;
}
export interface IPagiNationUIProps {
  onClickMovePrv: () => void;
  onClickMoveNext: () => void;
  startPage: number;
  nowPage: number;
  lastPage: number;
  onClickPage: (event: MouseEvent<HTMLSpanElement>) => void;
  // disAbledBt: boolean;
}

export interface IPageStyleProps {
  isActive: boolean;
}
