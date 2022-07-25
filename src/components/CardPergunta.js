import React from "react";
import virar from "../img/virar.svg"

export default function CardPergunta({pergunta, settela, tela}){
    
    return(
        <div className="perguntacont">
            <p>{pergunta}</p>
            <img onClick={() => settela(!tela)} src={virar} alt="virar.svg"/>
        </div>
    )
}