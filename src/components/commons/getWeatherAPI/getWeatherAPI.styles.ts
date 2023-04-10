import styled from "@emotion/styled";

export const WeatherWrap = styled.div`
  display: flex;
  gap: 0 10vw;
  @media (max-width: 768px) {
    * {
      font-size: 4px;
    }
  }
`;
export const WeatherTitle = styled.h1`
  font-size: 36px;
  font-weight: 600;
  font-family: "UhBeeRice", sans-serif;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;
export const Today = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const TodayTemEx = styled.div`
  padding-top: 20px;
  font-family: "UhBeeRice", sans-serif;
`;
export const TodayTemp = styled.span`
  color: #1e90ff;
  font-weight: 700;
`;
export const Ex = styled.p`
  font-size: 10px;
  color: silver;
  padding-top: 5px;
  @media (max-width: 700px) {
    font-size: 2px;
  }
`;
export const ThreeDays = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 25px;
  width: auto;
  @media (max-width: 900px) {
    flex-direction: column;
  }
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const WeatherImg = styled.img`
  width: 150px;
  height: 100px;
  @media (max-width: 1200px) {
    width: 100px;
    height: 80px;
  }
`;
export const WhatWeather = styled.span`
  font-size: 20px;
  font-family: "UhBeeRice", sans-serif;
  font-style: italic;
  font-weight: 800;
  padding-right: 10px;
`;
export const Day = styled.div`
  font-family: "nanum_somi", sans-serif;
  @media (max-width: 1200px) {
    font-size: 12px;
  }
`;
export const DaysWrap = styled.div`
  display: flex;
  gap: 10%;
  @media (max-width: 700px) {
    flex-direction: column;
    gap: 5px;
  }
`;
