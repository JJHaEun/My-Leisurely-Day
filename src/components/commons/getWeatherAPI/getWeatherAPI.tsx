import { Fragment } from "react";
import { GetWeather } from "../hooks/customs/openAPIGetWeather";
import * as S from "./getWeatherAPI.styles";
export default function GetWeatherAPI(): JSX.Element {
  const { conditionIcon, currentTemp, forecastIcon, today, todayW } =
    GetWeather();
  return (
    <>
      <S.WeatherWrap>
        <S.WeatherTitle>집에있기 좋은 날</S.WeatherTitle>
        <S.DaysWrap>
          <S.Today>
            <S.WhatWeather>{todayW}</S.WhatWeather>
            <S.Day>{today}</S.Day>
            <S.WeatherImg src={conditionIcon} />
            <S.TodayTemEx>
              현재온도: <S.TodayTemp>{currentTemp}</S.TodayTemp> ℃
            </S.TodayTemEx>
            <S.Ex>약간의 오차가 있을 수 있습니다</S.Ex>
          </S.Today>
          <S.ThreeDays>
            {forecastIcon.map((el: any) => (
              // 앞으로의 날씨 3일
              <div key={el.date}>
                <img src={el.day.condition.icon} />
                <S.Day>{el.date}</S.Day>
              </div>
            ))}
          </S.ThreeDays>
        </S.DaysWrap>
      </S.WeatherWrap>
    </>
  );
}
