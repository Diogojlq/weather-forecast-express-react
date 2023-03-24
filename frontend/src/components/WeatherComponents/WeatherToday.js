import './WeatherToday.css';

function WeatherToday (props) {
     return (
        <div className="today">
            <h2>Clima hoje</h2>
            <img src='https://openweathermap.org/img/wn/10d@2x.png' alt='icon' />
                <p>Temperatura max </p>
                <p>Desc</p>
                <p>Sensa</p>
                <p>Umidade</p>
                <p>Cidade</p>
                <p>Chuva</p>
        </div>
     )
}

export default WeatherToday;
