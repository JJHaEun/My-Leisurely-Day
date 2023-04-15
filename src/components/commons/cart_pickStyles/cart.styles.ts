import styled from "@emotion/styled";

export const MainSectionCart = styled.section`
  display: flex;
  gap: 25px;
  padding: 15px 20px;
  border-bottom: 1px solid #99bbcc;
`;
export const cartImgSection = styled.section`
  width: 120px;
  height: 90px;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const InfoSection1 = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  > div {
    display: flex;
    flex-direction: column;
  }
  > button {
    width: 120px;
    height: 30px;
    outline: none;
    border: none;
    background: #99bbcc;
    opacity: 0.6;
    font-weight: 600;
    cursor: pointer;
    :hover {
      opacity: 1;
    }
  }
`;

export const InfoSectionMain = styled.section`
  display: flex;
  gap: 200px;
`;

export const PriceWrap = styled.span`
  display: flex;
  gap: 3px;
`;
