import "./FAQ.css";
import { useState } from "react";

function TempoClima(props) {
  const tempoText = (
    <p>
      O tempo é o estado atual da atmosfera de um local, que pode mudar de um
      dia para o outro, ou até mesmo, de uma hora para outra. Por exemplo,
      quando dizemos “Hoje está chovendo em São Paulo” ou “Amanhã a previsão é
      de sol e temperaturas amenas” estamos nos referindo ao tempo, que varia de
      horas, dias a semanas. Já o clima representa a média das variações do
      tempo por um período mais longo de uma determinada região, tratando-se de
      meses, estações do ano e anos. Por exemplo, quando dizemos “O inverno no
      sudeste do Brasil é seco e o verão chuvoso” ou então “A previsão climática
      é de que a temperatura do ar fique acima da média no sul em agosto”,
      estamos nos referindo a clima.
    </p>
  );
  const [showTempo, setShowTempo] = useState(true);
  const [text, setText] = useState();

  const clickHandler = (event) => {
    if (showTempo === true) {
      setShowTempo(false);
      setText();
    } else if (showTempo === false) {
      setShowTempo(true);
      setText(tempoText);
    }

    if (showTempo === true) {
      setText(tempoText);
      setShowTempo(false);
    } else if (showTempo === false) {
      setText();
      setShowTempo(true);
    }
  };

  return (
    <div className="faqitem" onClick={clickHandler}>
      <h5>Qual a diferença entre tempo e clima ?</h5>
      {text}
    </div>
  );
}

export default TempoClima;
