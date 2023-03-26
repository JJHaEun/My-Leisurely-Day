import styled from "@emotion/styled";
import { MarketProfile } from "../../detail/usedItemDetail.styles";

export const CommentList = styled.div`
  width: 340px;
  height: calc((115px + 36px) * 3);
  overflow: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;
export const CommentWrap = styled.div`
  padding-bottom: 36px;
`;
export const ComTitle = styled.div`
  display: flex;
  gap: 139px;
`;
export const CommentMainTitle = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;
export const UserProfile = styled(MarketProfile)``;

export const UsersInFo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Name = styled.div`
  font-weight: 400;
  font-size: 24px;
  line-height: 100%;
  display: flex;
  align-items: center;
  letter-spacing: -0.05em;
  color: #000000;
`;

export const Date = styled.div`
  font-weight: 400;
  font-size: 15px;
  line-height: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.05em;
  color: #000000;
`;
export const DeleteEditAnswersWrap = styled.div`
  display: flex;
  gap: 16px;
`;
export const DeleteEditImg = styled.img`
  width: 18px;
  height: 18px;
  :hover {
    cursor: pointer;
  }
`;
export const Contents = styled.div`
  height: 48px;
  padding-top: 20px;
  padding-left: 16px;
  font-weight: 400;
  font-size: 24px;
  line-height: 100%;
  /* or 24px */

  display: flex;
  align-items: center;
  letter-spacing: -0.05em;

  color: #000000;
`;
