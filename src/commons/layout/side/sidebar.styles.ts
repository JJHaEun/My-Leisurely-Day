import styled from "@emotion/styled";
export const SideWrap = styled.div`
  height: auto;
  width: 155px;
  background: #ffffff;
  border: 1px solid #99bbcc;
  position: fixed;
  top: 220px;
  left: 1500px;
  padding: 28px 34px 32px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 50px;
  > h1 {
    font-weight: 500;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: -0.05em;
    padding-bottom: 22px;
  }
`;
export const Default = styled.div`
  width: 100%;
  height: 85px;
  margin-bottom: 10px;
  background: #c4c4c4;
`;
export const Name = styled.h3`
  width: 120px;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ProductImg = styled.img`
  width: 100%;
  height: 85px;
  margin-bottom: 10px;
`;
export const Today = styled.div`
  cursor: pointer;
`;
