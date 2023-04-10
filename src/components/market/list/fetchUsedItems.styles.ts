import styled from "@emotion/styled";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";

export const ListWrap = styled.div`
  display: flex;
  width: 80vw;
  height: 80vh;
  flex-wrap: wrap;
  align-items: center;
  overflow: auto;
  /* justify-content: center; */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

export const ItemBox = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-evenly;
  gap: 20px;

  > ul {
    width: 200px;
    height: 250px;
    list-style: none;
    color: #000;
    padding: 0;
    border: 1px solid #bdbdbd;
    :hover {
      cursor: pointer;
    }
    > li:nth-of-type(1) {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 180px;
      border-bottom: 1px solid #bdbdbd;
      > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    > li:last-child {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 14px;
    }
  }
`;

export const ItemName = styled.div`
  width: 87px;
  height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  /* padding: 16px 0px 16px 16px; */
  color: #000000;
`;
export const ItemPrice = styled.span`
  width: 100%;
  height: 25px;
  font-weight: 500;
  font-size: 15px;
  color: #000000;
  padding-top: 10px;
`;
export const PriceTime = styled.div`
  display: flex;
  justify-content: center;
`;
export const Time = styled.p`
  padding-top: 16px;
  height: 18px;
  font-weight: 500;
  font-size: 3px;
  color: #a9a9a9;
  width: 60px;
`;
export const DefaultImg = styled(LocalMallOutlinedIcon)`
  font-size: 80px;
`;
