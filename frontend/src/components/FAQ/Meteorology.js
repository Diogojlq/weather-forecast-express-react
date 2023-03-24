import "./FAQ.css";
import { useState } from "react";

function Meteorology(props) {
  const meteorologyText =
    <p>
      A meteorologia é uma área da ciência que estuda o comportamento da
      atmosfera, integrando o conhecimento de diversas áreas. Por ser
      multidisciplinar, envolve disciplinas como física, matemática, ciência da
      computação, estatística e química.
    </p>
      const [ showMeteorology, setShowMeteorology] = useState(true)
      const [ text, setText ] = useState()
    
      const clickHandler = (event) => {
        if(showMeteorology===true){
          setShowMeteorology(false)
          setText()
        } else if (showMeteorology===false) {
          setShowMeteorology(true)
          setText(meteorologyText)
        }
    
        if(showMeteorology===true){
          setText(meteorologyText)
          setShowMeteorology(false)
        } else if (showMeteorology===false) {
          setText()
          setShowMeteorology(true)
        }
      }
      

  return (
    <div className="faqitem" onClick={clickHandler}>
      <h5>O que a meteorologia estuda ?</h5>
      {text}
    </div>
  );
}

export default Meteorology;
