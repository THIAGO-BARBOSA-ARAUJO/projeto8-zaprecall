import React from "react"
import CardPergunta from "./CardPergunta"

export default function Pergunta(props) {
    const [tela, setTela] = React.useState(true)
    return(
        <>
            {tela ? (
                <div className="pergunta">
                    <p>Pergunta {props.numero}</p>
                    <img onClick={() => setTela(!tela)} src="img/play.svg" alt="play.svg"/>
                </div>
            ) : (
                <CardPergunta/>
            )}
        </>
    )
}