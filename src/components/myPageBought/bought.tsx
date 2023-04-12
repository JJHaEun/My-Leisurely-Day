import PagiNationPage from "../../commons/libraries/pagination/pagination.container";
import { insertCommas } from "../../commons/libraries/price";
import { useQueryFetchUsedItemsIBought } from "../commons/hooks/customs/quries/useQueryFetchUsedItemsIBought";
import { useQueryFetchUsedItemsCountIBought } from "../commons/hooks/customs/quries/useQueryyFetchUsedItemsCountIBought";
import * as S from "./bought.styles";

export default function Bought(): JSX.Element {
  const { fetchIBought, refetch } = useQueryFetchUsedItemsIBought();
  const { fetchIBoughtCount } = useQueryFetchUsedItemsCountIBought();
  return (
    <S.PageNationWrap>
      <S.IBoughtMain>
        <h1>구매내역</h1>
        <section>
          {fetchIBought?.fetchUseditemsIBought.map((el) => (
            <div key={el._id}>
              <section>
                {el.images?.[0] !== undefined && el.images?.[0] !== "" ? (
                  <img
                    src={`https://storage.googleapis.com/${el.images?.[0]}`}
                    alt=""
                  />
                ) : (
                  <img src={`/default_product.png`} />
                )}
              </section>
              <S.BoughtInfo>
                <S.ProductInfoSection>
                  <S.Name>{el.name}</S.Name>
                  <S.Remarks>{el.remarks}</S.Remarks>
                </S.ProductInfoSection>
                <S.PriceSection>
                  {insertCommas(Number(el.price))} 원
                </S.PriceSection>
              </S.BoughtInfo>
            </div>
          ))}
        </section>
      </S.IBoughtMain>
      <S.PageSection>
        <PagiNationPage
          refetch={refetch}
          countIBought={fetchIBoughtCount?.fetchUseditemsCountIBought}
        />
      </S.PageSection>
    </S.PageNationWrap>
  );
}
