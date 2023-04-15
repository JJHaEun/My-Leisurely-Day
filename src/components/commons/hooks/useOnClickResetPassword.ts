import { Modal } from "antd";
import { useRecoilState } from "recoil";
import { isOpenState } from "../../../commons/stores";
import { useMutationResetPassword } from "./customs/mutations/useMutationResetPW";
import { FETCH_USER_LOGGED_IN } from "./customs/quries/useQueryFetchUserLoggedIn";

export interface PasswordForm {
  password: string;
  passwordCheck: string;
}
export const useOnClickResetPW = () => {
  const [, setIsOpen] = useRecoilState(isOpenState);

  const [resetUserPassword] = useMutationResetPassword();
  const onClickResetPassword = async (data: PasswordForm) => {
    try {
      await resetUserPassword({
        variables: {
          password: data.password,
        },
        refetchQueries: [
          {
            query: FETCH_USER_LOGGED_IN,
          },
        ],
      });
      setIsOpen(false);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return {
    onClickResetPassword,
  };
};
