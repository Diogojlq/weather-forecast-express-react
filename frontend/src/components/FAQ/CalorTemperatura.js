import "./FAQ.css";
import { useState } from 'react';

function CalorTemperatura() {
  const calorTempText = (
    <p>
      Temperatura é uma propriedade física e é definida como a medida da
      agitação das moléculas de um corpo. Quanto maior a agitação dessas
      partículas, maior a temperatura do corpo. Ela é medida por um termômetro,
      geralmente em unidades de graus Celsius (°C) ou Fahrenheit (°F). Já o
      calor é a energia transferida entre dois corpos que apresentam diferença
      entre suas temperaturas. O calor pode ser transferido por condução,
      convecção ou radiação. As suas unidades de medida são joules ou calorias.
    </p>
  );

  const [showCalorTemp, setShowCalorTemp] = useState(true);
  const [text, setText] = useState();

  const clickHandler = (event) => {
    if (showCalorTemp === true) {
      setShowCalorTemp(false);
      setText();
    } else if (showCalorTemp === false) {
      setShowCalorTemp(true);
      setText(calorTempText);
    }

    if (showCalorTemp === true) {
      setText(calorTempText);
      setShowCalorTemp(false);
    } else if (showCalorTemp === false) {
      setText();
      setShowCalorTemp(true);
    }
  };

  return (
    <div className="faqitem" onClick={clickHandler}>
      <h5>Qual a diferença entre calor e temperatura ?</h5>
      {text}
    </div>
  );
}

export default CalorTemperatura;