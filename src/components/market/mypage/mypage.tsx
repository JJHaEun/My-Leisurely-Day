import MyPageMainTop from "./mypageMainTop/mypageMainTop";
import * as S from "./mypage.styles";
export default function MyPage(): JSX.Element {
  return (
    <S.MyPageWrap>
      <section>
        <MyPageMainTop />
      </section>
    </S.MyPageWrap>
  );
}
