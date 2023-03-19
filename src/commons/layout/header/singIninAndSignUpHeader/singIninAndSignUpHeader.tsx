import { useMovePage } from "../../../../components/commons/hooks/useMovePage";
import * as S from "./singIninAndSignUpHeader.styles";

export default function SignInAndSignUpHeader(): JSX.Element {
  const { onClickMoveTo } = useMovePage();

  return (
    <S.LoginAndSignUpHeaderWrap>
      <S.SiteTitle onClick={onClickMoveTo(`/`)}>느린하루</S.SiteTitle>
    </S.LoginAndSignUpHeaderWrap>
  );
}
