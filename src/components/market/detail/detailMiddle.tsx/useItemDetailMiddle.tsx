import DOMPurify from "dompurify";
import KakaoMapDetail from "../../kakao/kakaomapDetail/kakaoMapDetail";
import { IItemDetailProps } from "../usedItemDetail.types";

export default function DetailMarketMiddle(
  props: IItemDetailProps
): JSX.Element {
  return (
    <div>
      <div>
        <div>
          <h1>상품정보</h1>
        </div>
        <div>
          {typeof window !== "undefined" ? (
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  String(props.data?.fetchUseditem.contents)
                ),
              }}
            ></div>
          ) : (
            <div />
          )}
        </div>
        <div>
          <label>거래지역</label>
        </div>
        {props.data?.fetchUseditem.useditemAddress?.address !== undefined &&
        props.data?.fetchUseditem.useditemAddress?.address !== null &&
        props.data.fetchUseditem.useditemAddress.address !== "" ? (
          <KakaoMapDetail />
        ) : (
          <div style={{ width: 860, height: 448 }}>주소없음</div>
        )}
      </div>
      <div>
        <div>
          <h1>상점정보</h1>
        </div>
        <div>
          <div>
            {props.data?.fetchUseditem.seller?.picture !== "" &&
            props.data?.fetchUseditem.seller?.picture !== undefined ? (
              <img
                src={`https://storage.googleapis.com/${String(
                  props.data?.fetchUseditem.seller?.picture
                )}`}
              />
            ) : (
              <div />
            )}
          </div>
          <span>{props.data?.fetchUseditem.seller?.name}</span>
        </div>
        {/* <div>댓글부분</div> */}
      </div>
    </div>
  );
}
