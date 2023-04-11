import styled from "@emotion/styled";

export const MainHeaderWrap = styled.div`
  width: 100vw;
  border-bottom: 1px solid #99bbcc;
  padding: 40px 0;
  justify-content: flex-end;
  display: flex;
  text-align: center;
`;

export const MenuWrap = styled.div`
  margin-right: 155px;
  width: 560px;
  height: 20px;
  display: flex;
  gap: 7px;
  align-items: center;
  justify-content: center;
`;
export const UserInFo = styled.div`
  height: 16px;
  font-weight: 500;
  font-size: 14px;
  line-height: 100%;
  gap: 160px;
  display: flex;
  align-items: center;
  color: #000000;
`;

export const UserName = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 100%;
  display: flex;
  align-items: center;

  color: #000000;
  padding-right: 5px;
  cursor: pointer;
  :hover {
    color: #66aacc;
  }
`;
export const UserPointAmount = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 100%;
  font-style: italic;
  display: flex;
  align-items: center;
  color: #000000;
  border-bottom: 1px solid black;
  cursor: pointer;
  :hover {
    color: #66aacc;
  }
`;
export const UserPointWrap = styled.div`
  display: flex;
  gap: 5px;
`;

export const Point_P = styled.span`
  font-weight: 600;
`;
export const UserMain = styled.div`
  display: flex;
  gap: 5px;
`;

export const UsersChoiceWrap = styled.div`
  padding-left: 16px;
  display: flex;
  gap: 16px;
  align-items: center;
  > span {
    cursor: pointer;
  }
`;

export const Menus = styled.span`
  line-height: 100%;
  :hover {
    cursor: pointer;
  }
`;

export const UnUsersChoiceWrap = styled.div`
  padding-right: 155px;
`;
