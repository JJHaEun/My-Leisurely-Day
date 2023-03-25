import axios from "axios";
import { useEffect, useState } from "react";

export const GetWeather = () => {
  const [today, setToday] = useState("");
  const [todayW, setTodayW] = useState("");
  const [conditionIcon, setConditionIcon] = useState("");
  const [forecastIcon, setForecastIcon] = useState([]);
  const [currentTemp, setCurrentTemp] = useState("");

  useEffect(() => {
    const options = {
      method: "GET",
      // url: "https://weatherapi-com.p.rapidapi.com/current.json",
      url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
      // params: { q: "South Korea" },// 오늘날씨만 받아오기
      params: { q: "South Korea", days: "3" },
      headers: {
        "X-RapidAPI-Key": "bcaa27cb8amsha0c78dedd13b245p1e6b34jsn749e0be3decd",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data.forecast.forecastday[0].day.condition.text);
        setForecastIcon(response.data?.forecast?.forecastday); // 앞으로 날씨(3일치)
        // response.data.forecastday.map((el)=>(
        //   el.day.condition.icon
        // ))
        setTodayW(response.data.current.condition.text); // 오늘의 날씨 영어
        setConditionIcon(response.data.current.condition.icon); // 오늘의 날씨 아이콘
        setToday(response.data.location.localtime.slice(0, 10)); // 날짜
        setCurrentTemp(response.data.current.temp_c);
      })
      .catch(function (error: any) {
        console.error(error);
      });
  }, []);

  return {
    today,
    todayW,
    conditionIcon,
    forecastIcon,
    currentTemp,
  };
};
