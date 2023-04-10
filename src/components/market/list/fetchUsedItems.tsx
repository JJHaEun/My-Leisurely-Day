import InfiniteScroll from "react-infinite-scroller";
import { MessageDate } from "../../../commons/libraries/date";
import { IUseditem } from "../../../commons/types/generated/types";
import { useQueryFetchUsedItems } from "../../commons/hooks/customs/quries/useQueryFetchUsedItems";
import { onClickAddSesstion } from "../../commons/hooks/event/onClickAddSesstion";
import * as S from "./fetchUsedItems.styles";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
export default function MarketMainList(): JSX.Element {
  const { onLoadMore, data } = useQueryFetchUsedItems();
  const { onClickAddTodayAndMove } = onClickAddSesstion();
  return (
    <>
      <S.ListWrap>
        <InfiniteScroll
          pageStart={0}
          loadMore={onLoadMore}
          hasMore={true}
          useWindow={false}
        >
          <S.ItemBox>
            {data?.fetchUseditems.map((el: IUseditem) => (
              <ul key={el._id} onClick={onClickAddTodayAndMove(el)}>
                {el.images?.[0] !== undefined && el.images?.[0] !== "" ? (
                  <li>
                    <img
                      src={`https://storage.googleapis.com/${el.images[0]} `}
                      alt=""
                    />
                  </li>
                ) : (
                  <li>
                    <S.DefaultImg />
                  </li>
                )}
                <li>
                  <S.ItemName>{el.name}</S.ItemName>
                  <S.PriceTime>
                    <S.ItemPrice>{el.price} 원</S.ItemPrice>
                    <S.Time>{MessageDate(el.createdAt)}</S.Time>
                  </S.PriceTime>
                </li>
              </ul>
            ))}
          </S.ItemBox>
        </InfiniteScroll>
      </S.ListWrap>
    </>
  );
}
