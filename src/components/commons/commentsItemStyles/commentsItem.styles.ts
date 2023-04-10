import styled from "@emotion/styled";
import {
  DefaultMarketProfile,
  MarketProfile,
} from "../../market/detail/usedItemDetail.styles";

export const CommentWrap = styled.div`
  padding-bottom: 36px;
`;
export const ComTitle = styled.div`
  display: flex;
  gap: 8em;
`;
export const CommentMainTitle = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;
export const UserProfile = styled(MarketProfile)``;

export const DefaultUserProfile = styled(DefaultMarketProfile)``;

export const UsersInFo = styled.div`
  display: flex;
  gap: 1em;
`;

export const Name = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 100%;
  display: flex;
  align-items: center;
  letter-spacing: -0.05em;
  color: #000000;
`;

export const Date = styled.div`
  font-weight: 400;
  font-size: 10px;
  line-height: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.05em;
  color: silver;
`;
export const DeleteEditAnswers = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
export const DeleteEditImg = styled.img`
  width: 14px;
  height: 14px;
  :hover {
    cursor: pointer;
  }
`;
export const Contents = styled.div`
  height: 48px;
  padding-top: 10px;
  padding-left: 16px;
  font-weight: 400;
  font-size: 20px;
  line-height: 100%;
  /* or 24px */

  display: flex;
  align-items: center;
  letter-spacing: -0.05em;

  color: #000000;
`;
