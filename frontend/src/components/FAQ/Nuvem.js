import "./FAQ.css";
import { useState } from "react";

function Nuvem(props) {
  const nuvemText = (
    <p>
      As nuvens de chuva são formadas a partir da evaporação das águas da
      superfície da terra e do levantamento de parcelas de ar quentes e úmidas.
      Quando a água evapora, ela se transforma em vapor de água, que é mais leve
      do que o ar à sua volta. Isso faz com que o ar próximo à superfície se
      torne mais úmido e menos denso do que o ar acima dele. A parcela de ar
      mais leve tende a se elevar. À medida que sobe, ela se expande e resfria,
      o que provoca a condensação do vapor de água presente na parcela de ar.
      Esse processo leva à formação de nuvens e, eventualmente, à precipitação.
    </p>
  );
  const [showNuvem, setShowNuvem] = useState(true);
  const [text, setText] = useState();

  const clickHandler = (event) => {
    if (showNuvem === true) {
      setShowNuvem(false);
      setText();
    } else if (showNuvem === false) {
      setShowNuvem(true);
      setText(nuvemText);
    }

    if (showNuvem === true) {
      setText(nuvemText);
      setShowNuvem(false);
    } else if (showNuvem === false) {
      setText();
      setShowNuvem(true);
    }
  };

  return (
    <div className="faqitem" onClick={clickHandler}>
      <h5>Como são formadas as nuvens de chuva ?</h5>
      {text}
    </div>
  );
}

export default Nuvem;
