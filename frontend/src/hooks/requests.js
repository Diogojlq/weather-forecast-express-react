import MainWeather from "../components/MainWeather";

const WEATHER_API_URL = 'http://localhost:5000';

async function httpGetWeatherData(props) {
  const response =  await fetch(`${WEATHER_API_URL}/test`);
  return (
        <MainWeather getWeather={response} />
  )
}

export default httpGetWeatherData;