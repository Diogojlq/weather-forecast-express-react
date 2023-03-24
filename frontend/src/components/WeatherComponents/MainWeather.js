import './MainWeather.css'
import { useEffect, useState } from "react";
const WEATHER_API_URL = 'http://localhost:5000';

function MainWeather (props) {
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
        <div className='main'>
            <div>
                <h1>Clima agora</h1>
                <img src='https://openweathermap.org/img/wn/10d@2x.png' alt='icon' />
                <p>Temp : {data.dt}</p>
                <p>Desc</p>
                <p>Sensa</p>
                <p>Umidade</p>
                <p>Chuva</p>
                <p>Cidade</p>
            </div>
        </div>
    )
}

export default MainWeather;