import MainWeather from "./components/MainWeather";
import WeatherOvermorrow from "./components/WeatherOvermorrow";
import WeatherToday from "./components/WeatherToday";
import WeatherTomorrow from "./components/WeatherTomorrow";
import BaseComponent from "./components/UI/BaseComponent";
import Navbar from "./Navbar"
import Clima from './components/Clima'

function App() {

  return (
    <div>
      <Navbar />
      <BaseComponent>
        <MainWeather />
        <WeatherToday />
      </BaseComponent>
      <BaseComponent>
        <WeatherTomorrow />
        <WeatherOvermorrow />
      </BaseComponent>
      <BaseComponent>
        <div><Clima /></div>
      </BaseComponent>
    </div>
  );
}

export default App;
