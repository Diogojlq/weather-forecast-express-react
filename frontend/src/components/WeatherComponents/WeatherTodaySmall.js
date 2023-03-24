import './WeatherTodaySmall.css'

function WeatherTodaySmall () {
    return (
        <div className="today-small">
            <h2>Clima hoje</h2>
            <div class="container">
                <div class="col">
                    <h6 class="row-sm" className='itens-margin'><img src='https://openweathermap.org/img/wn/10d@2x.png' alt='icon' /></h6>
                    <h6 class="row-sm" className='itens-margin'>Umidade</h6>
                    <h6 class="row-sm" className='itens-margin'>Desc</h6>
                    </div>
                <div class="col">
                    <h6 class="row-sm" className='itens-margin'>Temperatura: <div className="tempsize">25</div></h6>
                    <h6 class="row-sm" className='itens-margin'>Sensação térmica: <div className='sensationsize'>21</div></h6>
                </div>
            </div>
        </div>
    )
}

export default WeatherTodaySmall;