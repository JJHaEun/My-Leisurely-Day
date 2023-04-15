import MyPageMainTop from "./mypageMainTop/mypageMainTop";
import * as S from "./mypage.styles";
import MyPageMainBottom from "./mypageMainBottom/mypageMainBottom";
export default function MyPage(): JSX.Element {
  return (
    <S.MyPageWrap>
      <section>
        <MyPageMainTop />
      </section>
      <section>
        <MyPageMainBottom />
      </section>
    </S.MyPageWrap>
  );
}
