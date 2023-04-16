import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilValueLoadable } from "recoil";
import { restoreAccessTokenLoadable } from "../../../commons/stores";

export const useAuth = (): void => {
  const router = useRouter();
  const restoreAccess = useRecoilValueLoadable(restoreAccessTokenLoadable);

  useEffect(() => {
    void restoreAccess.toPromise().then((newAccessToken) => {
      if (newAccessToken === undefined) {
        Modal.info({
          content: "로그인 후 이용 가능합니다",
          // afterClose() {
          // },
        });
        void router.push(`/signIn`);
      }
    });
  }, []);
};
