import { Modal } from "antd";
import { PriceForm } from "../../../myPageChargePoint/chargePoint.types";
import { useMutationCreatePointTransactionOfLoading } from "../customs/mutations/useMutationCreatePointTransactionOfLoading";
import {
  FETCH_USER_LOGGED_IN,
  useQueryFetchUserLoggedIn,
} from "../customs/quries/useQueryFetchUserLoggedIn";

declare const window: typeof globalThis & {
  IMP: any;
};

export const onClickChargeKakao = () => {
  const { data: Data } = useQueryFetchUserLoggedIn();
  const [createPointTransactionOfLoading] =
    useMutationCreatePointTransactionOfLoading();

  const onSubmitChargeKakao = (data: PriceForm) => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675");
    IMP.request_pay(
      {
        pg: "kakaopay",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011",
        name: "포인트 충전",
        amount: data.price,
        buyer_email: Data?.fetchUserLoggedIn.email,
        buyer_name: Data?.fetchUserLoggedIn.name,
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "http://localhost:3000/mypage",
        // "https://leisuelyday.shop/mypage"
      },
      async (rsp: any) => {
        if (rsp.success === true) {
          try {
            await createPointTransactionOfLoading({
              variables: {
                impUid: rsp.imp_uid,
              },
              refetchQueries: [
                {
                  query: FETCH_USER_LOGGED_IN,
                },
              ],
            });
            Modal.success({ content: "결제완료!!" });
          } catch (error) {
            if (error instanceof Error) Modal.error({ content: error.message });
          }
        } else {
          Modal.info({
            title: "결제실패",
            content: "결제에 실패하였습니다 다시시도해주세요",
          });
        }
      }
    );
  };

  return {
    onSubmitChargeKakao,
  };
};
