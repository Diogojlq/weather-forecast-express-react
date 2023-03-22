import './MainWeather.css'

function MainWeather (props) {

    return (
        <div className='main'>
            <div>
                <h1>Weather now</h1>
                <h2>Icon</h2>
                <p>Temp : {props.getWeather}</p>
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