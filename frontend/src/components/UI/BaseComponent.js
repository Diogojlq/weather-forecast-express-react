import "./BaseComponent.css";
import MainWeather from "../WeatherComponents/MainWeather";
import WeatherOvermorrow from "../WeatherComponents/WeatherOvermorrow";
import WeatherToday from "../WeatherComponents/WeatherToday";
import WeatherTomorrow from "../WeatherComponents/WeatherTomorrow";
import WeatherTodaySmall from "../WeatherComponents/WeatherTodaySmall";
import Navbar from "../Navbar";
import Rain from '../Rain'
import FAQ from "../FAQ/FAQ";
import Forecast from "../ForecastData/Forecast";

function BaseComponent(props) {
  const classes = "base " + props.className;
  return (
<div>
    <Navbar />
    <h1 className="header">Previsão do tempo para sua localização</h1>
    <div className={classes}>
        {props.children}
        <div class="row">
            <div class="col">
                <MainWeather />
            </div>
            <div class="col">
                <WeatherToday />
            </div>
            <div class="col">
                <FAQ />
            </div>
        </div>
        <div class="row">
            <div class="col">
                <WeatherTodaySmall />
            </div>
            <div class="col">
                <WeatherTomorrow />
            </div>
            <div class="col">
                <WeatherOvermorrow />
            </div>
        </div>
    </div>
    <div className="container">
        <Rain />
    </div>
    <div>
        <Forecast />
    </div>
</div>
  );
}

export default BaseComponent;
