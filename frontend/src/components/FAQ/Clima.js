import "./FAQ.css";
import { useState } from "react";

function Clima() {
  //pass the text as props
  const climaText = 
  <p>
    Clima é a caracterização das condições atmosféricas de uma determinada
    região através de registros de um longo período de tempo.
    <p>
      Estas condições incluem temperatura, chuva, pressão atmosférica,
      umidade do ar e vento, por exemplo. O clima depende de diversos
      fatores, como circulação atmosférica, localização geográfica,
      altitude e proximidade com o oceano.
    </p>
 </p>

  const [ showClima, setShowClima] = useState(true)
  const [ text, setText ] = useState()

  const clickHandler = (event) => {
    if(showClima===true){
      setShowClima(false)
      setText()
    } else if (showClima===false) {
      setShowClima(true)
      setText(climaText)
    }

    if(showClima===true){
      setText(climaText)
      setShowClima(false)
    } else if (showClima===false) {
      setText()
      setShowClima(true)
    }
  }
  
  return (
    <div className="faqitem" onClick={clickHandler}>
      <h4>O que é clima ?</h4>
      {text}
    </div>
  );
}

export default Clima;
