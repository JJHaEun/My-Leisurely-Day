import styled from "@emotion/styled";

export const MainTitle = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 50px;
  gap: 30px;
  padding-top: 10vh;
  > section {
    > h1 {
      font-family: Cafe24, sans-serif;
    }
  }
`;

export const MainTitlePage = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 50px;
  gap: 30px;
  padding-top: 10vh;

  width: 700px;
  height: 500px;
  overflow: auto;
  > section {
    > h1 {
      font-family: Cafe24, sans-serif;
    }
  }
`;

export const ProductSellerName = styled.span`
  font-size: 10px;
  padding-bottom: 10px;
`;
export const ProductName = styled.h2`
  font-size: small;
  padding-bottom: 3px;
  font-weight: 600;
`;
export const TodayMore = styled.section`
  display: flex;
  justify-content: space-between;
  span:nth-of-type(1) {
    display: flex;
    align-items: center;
    cursor: pointer;
    :hover {
      color: #99bbcc;
    }
    span:nth-of-type(1) {
      border-bottom: 1px solid #99bbcc;
      font-weight: 500;
    }
  }
`;

export const MainSection = styled.section`
  cursor: pointer;
`;
export const MainWrapCurrent = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
`;

export const MainWrap = styled.div`
  display: flex;
  gap: 15px;
`;

export const ProductImgWrap = styled.section`
  width: 140px;
  height: 110px;
`;
export const ProductImg = styled.img`
  width: 100%;
  height: 100%;
`;
