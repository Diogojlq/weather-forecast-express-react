import './FAQ.css'
import Clima from './Clima';
import Meteorology from './Meteorology' 
import Nuvem from './Nuvem';
import TempoClima from './TempoClima';
import CalorTemperatura from './CalorTemperatura';

function FAQ() {
    return (
        <div>
            <Clima />
            <Meteorology />
            <Nuvem />
            <TempoClima />
            <CalorTemperatura />
        </div>
    )
}

export default FAQ;