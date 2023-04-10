import { ShopFilled } from "@ant-design/icons";
import styled from "@emotion/styled";
import { Carousel } from "antd";

interface IPicked {
  picked?: number;
}

export const TopMainWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Upmain = styled.div`
  display: flex;
`;

export const ImgBox = styled.div`
  width: 480px;
  height: 480px;
  border: 1px solid #0066cc;
`;
export const ImgMainBoxWrap = styled.div`
  width: 450px;
  height: 450px;
`;
export const ImgMainImg = styled.img`
  object-fit: cover;
`;
export const CarouselWrap = styled(Carousel)`
  & > .slick-dots li button {
    width: 10px;
    height: 6px;
    border-radius: 100%;
    background-color: #99cccc;
  }
  & > .slick-dots li.slick-active button {
    width: 20px;
    height: 7px;
    background-color: #0066cc;
    border-radius: 50%;
    /* width: 7px;
  
    border-radius: 100%;
    background: red; */
  }
`;
export const ItemWrap = styled.div`
  padding-left: 68px;
`;
export const ItemTitleWrap = styled.div`
  border-bottom: 3px solid #acc4e5;
  width: 821px;
`;
export const ItemName = styled.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 100%;
  width: 562px;
  letter-spacing: -0.05em;
  padding-bottom: 51px;
`;

export const INameWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const EditDeletWrap = styled.div`
  display: flex;
  gap: 16px;
  > img {
    width: 18px;
    height: 18px;
    :hover {
      cursor: pointer;
    }
  }
`;
export const PriceWrap = styled.div`
  display: flex;
  align-items: flex-end;
  padding-bottom: 20px;
  gap: 8px;
`;
export const Price = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 100%;
  display: flex;
  align-items: center;
  letter-spacing: -0.05em;
  color: #000000;
`;

export const Won = styled.span`
  padding-bottom: 7px;
  font-weight: 400;
  font-size: 20px;
  line-height: 100%;
  letter-spacing: -0.05em;
  color: #000000;
`;
export const RemarksWrap = styled.div`
  padding: 30px 20px;
  width: 801px;
  height: 130px;
`;
export const Remarks = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 100%;
  letter-spacing: -0.05em;
  color: #000000;
`;
export const Tags = styled.span`
  width: auto;
  height: 30.51px;
  background: #99bbcc;
  border-radius: 13px;
  text-align: center;
  padding: 7px 17px;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  /* identical to box height, or 16px */
  letter-spacing: -0.05em;

  color: #000000;
`;
export const TagsWrap = styled.div`
  display: flex;
  gap: 10px;
  padding-top: 14px;
  padding-bottom: 32.49px;
  width: 820px;
  height: calc(31.51px + 32.49px + 14px);
  border-bottom: 1px solid #99bbcc;
`;
export const ButtonWrap = styled.div`
  display: flex;
  padding-top: 36.01px;
  gap: 22px;
`;
export const PickBt = styled.button<IPicked>`
  border: 0;
  width: 152px;
  height: 100px;
  background: #99bbcc;
  opacity: ${(props) => (props.picked ? 1 : 0.6)};
  font-weight: 700;
  font-size: 30px;
  line-height: 100%;
  /* or 30px */
  gap: 5px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  letter-spacing: -0.05em;
  color: #ffffff;
  :hover {
    cursor: pointer;
  }
  ::content {
    background-color: #000000;
  }
`;

export const Pickcount = styled.span`
  font-weight: 700;
  font-size: 30px;
  line-height: 100%;
  /* or 30px */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.05em;

  color: #ffffff;
`;

export const PushMyBasket = styled.button`
  width: 312px;
  height: 100px;
  background: #66aacc;
  opacity: 0.5;
  font-weight: 700;
  font-size: 30px;
  line-height: 100%;
  border: none;
  /* or 30px */

  letter-spacing: -0.05em;

  color: #ffffff;
  :hover {
    cursor: pointer;
  }
`;

export const Buy = styled.button`
  background-color: #66aacc;
  font-weight: 700;
  font-size: 30px;
  line-height: 100%;
  /* or 30px */
  width: 312px;
  height: 100px;
  border: none;
  letter-spacing: -0.05em;

  color: #ffffff;
  :hover {
    cursor: pointer;
  }
`;

export const Under = styled.div`
  display: flex;
  padding-top: 84px;
`;
export const DetailWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 37px;
  height: 1200x;
  border-right: 1px solid #99bbcc;
`;
export const ProductDetailTitleWrap = styled.div`
  padding-bottom: 30px;
  width: 925px;
  border-bottom: 3px solid #99bbcc;
  > h1 {
    font-weight: 700;
    font-size: 32px;
    line-height: 100%;
    display: flex;
    align-items: center;
    letter-spacing: -0.05em;
    color: #000000;
  }
`;

export const ContentsWrap = styled.div`
  height: calc(19px + 8px + 3px + 200px);
  overflow: auto;
  display: flex;
  width: 916px;
  padding: 27px 20px 3px 20px;
`;
export const Contents = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 100%;
  text-align: center;
  letter-spacing: -0.05em;
  color: #000000;
`;
export const Location = styled.div`
  padding-top: 38px;
  padding-bottom: 19px;
  display: flex;
  gap: 10px;
  align-items: center;
  & > label {
    font-weight: 500;
    font-size: 24px;
    line-height: 100%;
    letter-spacing: -0.05em;
    color: #000000;
  }
`;
export const MarketInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 34px;
`;
export const MarketInFoTitleWrap = styled.div`
  border-bottom: 3px solid #acc4e5;
  padding-bottom: 30px;
  width: 340px;
`;
export const MarketInFoTitle = styled.h1`
  font-weight: 700;
  font-size: 32px;
  line-height: 100%;
  display: flex;
  align-items: center;
  letter-spacing: -0.05em;
  color: #000000;
`;

export const InFoMain = styled.div`
  display: flex;
  padding: 32px 0 32px calc(50px - 37px);
  align-items: center;
  gap: 33px;
  width: 340px;
  border-bottom: 1px solid #acc4e5;
`;
export const MarketPicture = styled.div`
  width: 75px;
  height: 75px;
  border-radius: 50px;
`;
export const MarketProfile = styled.img`
  width: 100%;
  height: 100%;
`;

export const DefaultMarketProfile = styled.img`
  width: 75px;
  height: 75px;
  border-radius: 50px;
`;
export const InFoUser = styled.span`
  font-weight: 400;
  font-size: 32px;
  line-height: 100%;
  letter-spacing: -0.05em;
  color: #000000;
`;

export const CommentTitleWrap = styled.div`
  padding-bottom: 32px;
  padding-top: 76px;
  border-bottom: 3px solid #acc4e5;

  & > h1 {
    font-weight: 700;
    font-size: 32px;
    line-height: 100%;
    letter-spacing: -0.05em;
    color: #000000;
  }
`;
