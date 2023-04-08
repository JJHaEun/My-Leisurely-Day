import { useMutationLogOut } from "./customs/mutations/useMutationLogout";
import { Modal } from "antd";

export const useOnClickLogout = () => {
  const [logoutUser] = useMutationLogOut();
  const onClickLogout = async () => {
    await logoutUser();
    Modal.success({ title: "로그아웃 성공", content: "로그아웃되었습니다" });

    window.location.reload();
  };
  return {
    onClickLogout,
  };
};
