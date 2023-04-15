import { useAuth } from "../../src/components/commons/hooks/useAuth";
import MyPage from "../../src/components/mypage/mypage";

export default function MyPages(): JSX.Element {
  useAuth();
  return (
    <>
      <MyPage />
    </>
  );
}
