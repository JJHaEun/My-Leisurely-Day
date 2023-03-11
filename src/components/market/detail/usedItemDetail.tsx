import { useQueryFetchUsedItem } from "../../commons/hooks/customs/quries/useQueryFetchUsedItem";
import { v4 as uuidv4 } from "uuid";
import { insertCommas } from "../../../commons/libraries/price";
import DetailMarketMiddle from "./detailMiddle.tsx/useItemDetailMiddle";

export default function DetailMarket(): JSX.Element {
  const { data } = useQueryFetchUsedItem();

  return (
    <div>
      <div>
        <div>
          {data?.fetchUseditem.images?.filter((el) => el).length !==
            undefined &&
          data?.fetchUseditem.images?.filter((el) => el).length > 0 ? (
            data?.fetchUseditem.images
              ?.filter((el) => el)
              .map((el) => (
                <div key={uuidv4()}>
                  {el !== "" ? (
                    <img src={`https://storage.googleapis.com/${el}`} />
                  ) : (
                    <div />
                  )}
                </div>
              ))
          ) : (
            <div />
          )}
        </div>
        <div>
          <div>
            <h1>{data?.fetchUseditem.name}</h1>
            <div>{/* 삭제, 수정 아이콘 */}</div>
          </div>
          <div>
            <h1>{insertCommas(Number(data?.fetchUseditem.price))}</h1>
          </div>

          <div>
            <div>
              <div>{data?.fetchUseditem.remarks}</div>
            </div>
            <div>
              {data?.fetchUseditem.tags?.map((el) => (
                // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
                <span key={uuidv4() + 1}>
                  {el.replaceAll(el, `# ${el}`).split(" ")}
                </span>
              ))}
            </div>
            <div>
              <button>찜</button>
              <button>장바구니</button>
              <button>구매하기</button>
            </div>
          </div>
        </div>
      </div>
      <DetailMarketMiddle data={data} />
    </div>
  );
}
