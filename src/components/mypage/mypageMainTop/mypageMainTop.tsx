import { useEffect, useState } from "react";
import { useQueryFetchUsedItemsCountIPicked } from "../../commons/hooks/customs/quries/useQueryFetchUsedItemsCountIPicked";
import { useQueryFetchUserLoggedIn } from "../../commons/hooks/customs/quries/useQueryFetchUserLoggedIn";
import { useQueryFetchUsedItemsCountIBought } from "../../commons/hooks/customs/quries/useQueryyFetchUsedItemsCountIBought";
import { useOnClickLogout } from "../../commons/hooks/useOnclickLogOut";
import * as S from "./mypageMainTop.styles";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { ShoppingTwoTone } from "@ant-design/icons";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import { useMovePage } from "../../commons/hooks/useMovePage";
import { useToggleModal } from "../../commons/hooks/useToggle";
import { useRecoilState } from "recoil";
import { isOpenState } from "../../../commons/stores";
import {
  PasswordForm,
  useOnClickResetPW,
} from "../../commons/hooks/useOnClickResetPassword";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../../commons/libraries/validations/passwordValidation";
import { Modal } from "antd";

export default function MyPageMainTop(): JSX.Element {
  const { data } = useQueryFetchUserLoggedIn();
  const { fetchIBoughtCount } = useQueryFetchUsedItemsCountIBought();
  const { onClickLogout } = useOnClickLogout();
  const [IBought, setIBought] = useState(0);
  const { IPickedCount } = useQueryFetchUsedItemsCountIPicked();
  const { onClickMoveTo } = useMovePage();
  const { ToggleModal } = useToggleModal();
  const [isOpen] = useRecoilState(isOpenState);
  const { onClickResetPassword } = useOnClickResetPW();

  const { register, handleSubmit, formState } = useForm<PasswordForm>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  useEffect(() => {
    const basket = JSON.parse(String(localStorage.getItem("baskets")));
    setIBought(basket?.length);
  }, []);
  return (
    <S.MyPageMainWrap>
      {isOpen && (
        <Modal
          open={isOpen}
          onOk={handleSubmit(onClickResetPassword)}
          onCancel={ToggleModal}
        >
          <input type="password" {...register("password")} />
          <div>{formState.errors.password?.message}</div>
          <input type="password" {...register("passwordCheck")} />
          <div>{formState.errors.passwordCheck?.message}</div>
        </Modal>
      )}
      <S.MyMainSectionLeft>
        <S.MyMenuFlex>
          <div>
            <span>
              {data?.fetchUserLoggedIn.picture ? (
                <S.Avatar
                  image={`https://storage.googleapis.com/${data.fetchUserLoggedIn.picture}`}
                  width={30}
                  height={30}
                  border={0}
                  borderRadius={50}
                  scale={1.2}
                />
              ) : (
                <S.DefaultProfile />
              )}
            </span>
            <S.Name>{data?.fetchUserLoggedIn?.name}</S.Name>
          </div>
          <S.Email>{data?.fetchUserLoggedIn.email}</S.Email>
        </S.MyMenuFlex>
        <div>
          <button onClick={ToggleModal}>비밀번호 변경</button>
          <button onClick={onClickLogout}>로그아웃</button>
        </div>
      </S.MyMainSectionLeft>
      <S.MyInFos>
        <S.MyInFoMenu>
          <S.MyMenuFlex3 onClick={onClickMoveTo(`/mypage/charge`)}>
            <S.IconMenu>
              <CopyrightIcon />
              <span>포인트</span>
            </S.IconMenu>
            <span>{data?.fetchUserLoggedIn.userPoint?.amount} 원</span>
          </S.MyMenuFlex3>
          <S.MyMenuFlex3 onClick={onClickMoveTo(`/mypage/bought`)}>
            <S.IconMenu>
              <SellOutlinedIcon />
              <span>구매상품</span>
            </S.IconMenu>
            <span>{fetchIBoughtCount?.fetchUseditemsCountIBought} 개</span>
          </S.MyMenuFlex3>
        </S.MyInFoMenu>
        <S.MyInFoMenu2>
          <S.MyMenuFlex2 onClick={onClickMoveTo(`/mypage/cart`)}>
            <S.IconMenu>
              <ShoppingTwoTone />
              <span>장바구니</span>
            </S.IconMenu>
            <span>{IBought} 개</span>
          </S.MyMenuFlex2>
          <S.MyMenuFlex2 onClick={onClickMoveTo(`/mypage/picked`)}>
            <S.IconMenu>
              <S.IPicked />
              <span>위시리스트</span>
            </S.IconMenu>
            <span>{IPickedCount?.fetchUseditemsCountIPicked} 개</span>
          </S.MyMenuFlex2>
        </S.MyInFoMenu2>
      </S.MyInFos>
    </S.MyPageMainWrap>
  );
}
