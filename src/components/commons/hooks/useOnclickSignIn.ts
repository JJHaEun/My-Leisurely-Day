import { Modal } from "antd";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/stores";
import { ISignForm } from "../../market/signIn/signIn.types";
import { useMutationLoginUser } from "./customs/mutations/useMutationLoginUser";
import { FETCH_USER_LOGGED_IN } from "./customs/quries/useQueryFetchUserLoggedIn";

export const useOnClickSignIn = () => {
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [loginUser] = useMutationLoginUser();
  const router = useRouter();
  const onClickSignIn = async (data: ISignForm) => {
    try {
      const result = await loginUser({
        variables: {
          ...data,
        },
        refetchQueries: [{ query: FETCH_USER_LOGGED_IN }],
      });
      console.log(result);
      const accessToken = result.data?.loginUser.accessToken;
      if (accessToken === undefined) {
        Modal.error({ content: "로그인에 실패했습니다. 다시 시도해주세요" });
        return;
      }
      setAccessToken(accessToken);
      void router.push(`/market`);
      // const newPageUrl = "/market";
      // window.location.href = newPageUrl;
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  return {
    onClickSignIn,
  };
};
