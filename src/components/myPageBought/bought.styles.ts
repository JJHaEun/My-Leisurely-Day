import styled from "@emotion/styled";

export const PageNationWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IBoughtMain = styled.div`
  display: flex;
  flex-direction: column;

  > h1 {
    font-size: 1.5rem;
    padding-bottom: 1rem;
  }
  > section {
    > div {
      display: flex;
      padding: 0 2rem 1rem 2rem;
      gap: 3rem;
      border-bottom: 1px solid #99bbcc;
      > section {
        width: 140px;
        height: 110px;
        > img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
`;

export const BoughtInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const ProductInfoSection = styled.section`
  display: flex;
  align-items: center;
  gap: 60px;
`;
export const Name = styled.span`
  width: 80px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Remarks = styled(Name)`
  width: 120px;
  color: #66aacc;
  opacity: 0.5;
  font-size: 12px;
`;

export const PriceSection = styled.section`
  display: flex;
`;

export const PageSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
`;
