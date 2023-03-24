import { useEffect, useState } from "react";
import WeatherToday from "../components/WeatherComponents/WeatherToday";

const WEATHER_API_URL = 'http://localhost:5000';

function GetForecast(props){
  const [data , setData] = useState([]); ////setState([] or {}) array[] or object{}
  useEffect(() => {
    const getWeatherFromApiAsync = async () => {
      const response = await fetch(
        `${WEATHER_API_URL}/test`
      );
      const responseJson = await response.json();
      setData(responseJson);
    };
    getWeatherFromApiAsync();
  }, []);

  return (
    <div>
      <WeatherToday day={data} />
    </div>

  )
}

export default GetForecast;