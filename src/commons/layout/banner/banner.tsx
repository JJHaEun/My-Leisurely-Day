import { useMovePage } from "../../../components/commons/hooks/useMovePage";
import * as S from "./banner.styles";
import * as ST from "../header/singIninAndSignUpHeader/singIninAndSignUpHeader.styles";

export default function MainBanner(): JSX.Element {
  const { onClickMoveTo } = useMovePage();
  return (
    <S.MainBannerWrap>
      <ST.SiteTitle onClick={onClickMoveTo(`/`)}>느린하루</ST.SiteTitle>
      <S.Sell>
        <S.Selling onClick={onClickMoveTo(`/market/new`)}>판매하기</S.Selling>
      </S.Sell>
    </S.MainBannerWrap>
  );
}
