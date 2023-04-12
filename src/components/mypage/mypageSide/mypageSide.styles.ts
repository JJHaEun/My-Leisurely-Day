import styled from "@emotion/styled";
import { HomeOutlined } from "@ant-design/icons";
import MenuIcon from "@mui/icons-material/Menu";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

export const MyMenuSide = styled.div`
  width: 7em;
  > ul {
    list-style: none;
    border-bottom: 2px solid #99bbcc;
    display: flex;
    flex-direction: column;
    gap: 1em;
    padding: 5px 0 5px 0.8em;
    /* padding-right: 3em; */

    > li {
      display: flex;
      gap: 0.5em;
      align-items: center;
      > span {
        font-weight: 600;
        font-size: 1em;
        cursor: pointer;
        @media (max-width: 1140px) {
          font-size: 14px;
        }
        /* @media (max-width: 1510px) {
          font-size: 12px;
        } */
      }
    }
    > ul {
      display: flex;
      flex-direction: column;
      gap: 0.3em;
      /* padding-right: 3em; */
      > dl {
        font-size: 13px;
        /* padding-left: 2.5em; */
        cursor: pointer;
        padding-bottom: 0.3em;
        @media (max-width: 1140px) {
          font-size: 10px;
        }
        /* @media (max-width: 1510px) {
          font-size: 6px;
        } */
      }
    }
  }
  display: flex;
  flex-direction: column;
  gap: 0.3em;
  border-top: 2px solid #99bbcc;
  border-bottom: 1px solid #99bbcc;
`;

export const Home = styled(HomeOutlined)`
  @media (max-width: 1140px) {
    font-size: 12px;
  }
`;
export const Menu = styled(MenuIcon)`
  @media (max-width: 1140px) {
    font-size: 12px;
  }
`;

export const Buy = styled(CreditCardIcon)`
  @media (max-width: 1140px) {
    font-size: 16px;
  }
`;

export const Personal = styled(ManageAccountsIcon)`
  @media (max-width: 1570px) {
    font-size: 12px;
  }
`;
