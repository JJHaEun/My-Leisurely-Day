import { useRouter } from "next/router";
import { useMutationLogOut } from "./customs/mutations/useMutationLogout";
import { Modal } from "antd";
import { useQueryFetchUserLoggedIn } from "./customs/quries/useQueryFetchUserLoggedIn";

export const useOnClickLogout = () => {
  const [logoutUser] = useMutationLogOut();
  const { refetch } = useQueryFetchUserLoggedIn();
  const router = useRouter();
  const onClickLogout = async () => {
    await logoutUser();
    Modal.success({ title: "로그아웃 성공", content: "로그아웃되었습니다" });

    // refetch({}); // 얘 아니면
    window.location.reload();
  };
  return {
    onClickLogout,
  };
};
