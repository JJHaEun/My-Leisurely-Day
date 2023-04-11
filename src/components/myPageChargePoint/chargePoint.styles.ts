import styled from "@emotion/styled";

export const PontWrap = styled.div`
  display: flex;
`;

export const ChoicePoint = styled.input`
  -webkit-appearance: none;
  width: 17px;
  height: 17px;
  /* [라디오 버튼 테두리 색상 정의] */
  border: 1px solid #99bbcc;
  border-radius: 50%;
  outline: none;
  /* [라디오 버튼 배경 색상 정의] */
  background: #ffffff;
  cursor: pointer;
  :before {
    /* [content null 설정해서 커스텀 지정] */
    content: "";
    display: block;
    width: 65%;
    height: 70%;
    margin: 15% auto;
    border-radius: 50%;
  }
  :checked:before {
    /* [라디오 버튼이 클릭 되었을 경우 내부 원형 색상] */
    background: #99bbcc;
  }
`;

export const ChargeWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  > h1 {
    font-size: 3em;
    font-family: Cafe24, sans-serif;
  }
`;
export const MyPointCount = styled.span`
  font-size: 1.4em;
  > span {
    font-size: 1em;
    font-weight: 600;
    padding-left: 4px;
    color: #66aacc;
  }
`;

export const PintChargeSection = styled.section`
  display: flex;
  flex-direction: column;
  > div {
    border-bottom: 1px solid #99bbcc;
    padding-bottom: 1.2em;
    > span {
      font-size: 1.1em;
    }
  }
  > form {
    display: flex;
    flex-direction: column;
    gap: 3em;
    padding-top: 1.2em;
    > div {
      display: flex;
      gap: 1.2em;
      > div {
        display: flex;
        gap: 3px;
        > span {
          font-size: 1em;
          width: 80px;
        }
      }
    }
    > div {
      display: flex;
      justify-content: flex-end;
      position: relative;
      > button {
        width: 100px;
        height: auto;
        outline: none;
        border: none;
        background: #99bbcc;
        opacity: 0.8;
        padding: 8px;
        cursor: pointer;
        position: absolute;
        color: #ffffff;
        font-weight: 700;
        :hover {
          opacity: 1;
        }
        :active {
          top: 1px;
          right: 1px;
          opacity: 1;
        }
      }
    }
  }
`;
