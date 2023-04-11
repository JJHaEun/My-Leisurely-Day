import Script from "next/script";
import { useForm } from "react-hook-form";
import { useQueryFetchUserLoggedIn } from "../commons/hooks/customs/quries/useQueryFetchUserLoggedIn";
import { onClickChargeKakao } from "../commons/hooks/event/onChargeKaKao";
import { PriceForm } from "./chargePoint.types";
import * as S from "./chargePoint.styles";
export default function ChargePoint(): JSX.Element {
  const { register, handleSubmit } = useForm<PriceForm>();
  const { data } = useQueryFetchUserLoggedIn();
  const { onSubmitChargeKakao } = onClickChargeKakao();
  return (
    <>
      <Script
        type="text/javascript"
        src="https://code.jquery.com/jquery-1.12.4.min.js"
      ></Script>
      <Script
        type="text/javascript"
        src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
      ></Script>
      <S.ChargeWrap>
        <h1>충전하기</h1>
        <S.MyPointCount>
          내 포인트
          <span>{data?.fetchUserLoggedIn.userPoint?.amount}원</span>
        </S.MyPointCount>
        <S.PintChargeSection>
          <div>
            <span>포인트 충전</span>
          </div>
          <form onSubmit={handleSubmit(onSubmitChargeKakao)}>
            <div>
              <div>
                <S.ChoicePoint
                  type="radio"
                  value={100}
                  {...register("price")}
                />
                <span>100원</span>
              </div>
              <div>
                <S.ChoicePoint
                  type="radio"
                  value={500}
                  {...register("price")}
                />
                <span>500원</span>
              </div>
              <div>
                <S.ChoicePoint
                  type="radio"
                  value={2000}
                  {...register("price")}
                />
                <span>2000원</span>
              </div>
              <div>
                <S.ChoicePoint
                  type="radio"
                  value={5000}
                  {...register("price")}
                />
                <span>5000원</span>
              </div>
              <S.PontWrap>
                <S.ChoicePoint
                  type="radio"
                  value={10000}
                  {...register("price")}
                />
                <span>10000원</span>
              </S.PontWrap>
              <div>
                <S.ChoicePoint
                  type="radio"
                  value={20000}
                  {...register("price")}
                />
                <span>20000원</span>
              </div>
              <div>
                <S.ChoicePoint
                  type="radio"
                  value={50000}
                  {...register("price")}
                />
                <span>50000원</span>
              </div>
            </div>
            <div>
              <button>카카오 충전</button>
            </div>
          </form>
        </S.PintChargeSection>
      </S.ChargeWrap>
    </>
  );
}
