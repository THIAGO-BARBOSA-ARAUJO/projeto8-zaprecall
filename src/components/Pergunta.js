import React from "react"
import Card from "./Card"
import play from "../img/play.svg"
import naolembrei from "../img/naolembrei.svg"
import quasenaolembrei from "../img/quasenaolembrei.svg"
import zap from "../img/zap.svg"

export default function Pergunta(props) {
    const [tela, setTela] = React.useState("fechado")
    

    let cl = ""
    if(tela === "fechado"){cl = "pergunta"}
    if(tela === "naolembrei"){cl = "respondido pergunta"}
    if(tela === "quasenaolembrei"){cl = "pergunta quasenaolembrei"}
    if(tela === "zap"){cl = "pergunta zap"}

    let img = ""
    if(tela === "fechado"){img = play}
    if(tela === "naolembrei"){img = naolembrei}
    if(tela === "quasenaolembrei"){img = quasenaolembrei}
    if(tela === "zap"){img = zap}


    return(
        <>
            {tela === "fechado" || tela === "naolembrei" || tela === "quasenaolembrei" || tela === "zap" ? (
                <div className={cl}>
                    <p></p>
                    <p>Pergunta {props.numero}</p>
                    <img onClick={() => setTela("aberto")} src={img} alt="play.svg"/>
                </div>
            ) : (
                <Card setIcones={props.setIcones} numpergunta={props.numpergunta} setNumpergunta={props.setNumpergunta}  setInicio={setTela}/>
            )}
        </>
    )
}