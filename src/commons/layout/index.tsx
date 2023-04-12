import { useRouter } from "next/router";
import MyPageSide from "../../components/mypage/mypageSide/mypageSide";
import MainBanner from "./banner/banner";
import MainHeader from "./header/mainHeader/mainHeader";
import SignInAndSignUpHeader from "./header/singIninAndSignUpHeader/singIninAndSignUpHeader";
import * as S from "./index.styles";
import LayoutSideBar from "./side/sidebar";

interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps): JSX.Element {
  const router = useRouter();
  const SHOW_LOGIN_AND_SIGN_IN_HEADER = [`/signIn`, "/signUp"];
  const SHOW_LOGIN_AND_SIGN_IN_MYPAGE_SIDE = [
    `/signIn`,
    "/signUp",
    "/mypage",
    "/charge",
    "/cart",
    "/picked",
    "/bought",
  ];
  const SHOW_MYPAGE_SIDE = [
    "/mypage",
    "/charge",
    "/cart",
    "/picked",
    "/bought",
  ];

  const isShowLoginAndSignUp = SHOW_LOGIN_AND_SIGN_IN_HEADER.includes(
    router.asPath
  );
  const isShowLoginAndSignUpAndMyPage =
    SHOW_LOGIN_AND_SIGN_IN_MYPAGE_SIDE.includes(router.asPath);

  const isShowMine = SHOW_MYPAGE_SIDE.includes(router.asPath);
  return (
    <S.Page>
      {isShowLoginAndSignUp && <SignInAndSignUpHeader />}
      {!isShowLoginAndSignUp && (
        <>
          <MainHeader />
          <MainBanner />
        </>
      )}
      <S.MainPage>
        <section>{isShowMine && <MyPageSide />}</section>
        <S.Children>{props.children}</S.Children>
        {!isShowLoginAndSignUpAndMyPage && <LayoutSideBar />}
      </S.MainPage>
    </S.Page>
  );
}
