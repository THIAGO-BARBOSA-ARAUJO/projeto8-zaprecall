import React from "react"
import Pergunta from "./Pergunta"
import Concluidos from "./Concluidos"
import logo2 from "../img/logo2.svg"

export default function TelaJogo(){
    const numper = [1, 2, 3, 4]
    const [numpergunta, setNumpergunta] = React.useState(0)
    const [icones, setIcones] = React.useState([])
    return(
        <div className="container-telajogo">
            <div className="header">
                <img src={logo2} alt="logo2.svg"/>
                <p>ZapRecall</p>
            </div>
            <div className="perguntas">
            {numper.map((data)=>{
                return(
                    <Pergunta setIcones={setIcones} numpergunta={numpergunta} setNumpergunta={setNumpergunta} numero={data} />
                )
            })}        
            </div>
            <Concluidos icones={icones} numpergunta={numpergunta} />
        </div>
    )
}