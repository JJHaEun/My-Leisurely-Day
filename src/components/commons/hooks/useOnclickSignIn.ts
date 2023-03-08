import { Modal } from "antd";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/stores";
import { ISignForm } from "../../market/signIn/signIn.types";
import { useMutationLoginUser } from "./customs/mutations/useMutationLoginUser";

export const useOnClickSignIn = () => {
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [loginUser] = useMutationLoginUser();

  const onClickSignIn = async (data: ISignForm) => {
    try {
      const result = await loginUser({
        variables: {
          ...data,
        },
      });
      const accessToken = result.data?.loginUser.accessToken;
      if (accessToken === undefined) {
        Modal.error({ content: "로그인에 실패했습니다. 다시 시도해주세요" });
        return;
      }
      setAccessToken(accessToken);
      const newPageUrl = "/mypage";
      window.location.href = newPageUrl;
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  return {
    onClickSignIn,
  };
};
