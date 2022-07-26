import React from "react"
import TelaJogo from "./TelaJogo"
import logo from "../img/logo.svg"

export default function TelaInicial(){
    const [tela, setTela] = React.useState(true)
    return(
        <div className="container-ti">
            {tela ? (
                <div>
                    <img src={logo} alt="logo.svg"/>
                    <p>ZapRecall</p>
                    <input onClick={() => setTela(!tela)} type="submit" value="Iniciar Recall!" name="iniciar"/>
                </div>
            ) : (
                <TelaJogo/>
            )}
        </div>
    )
}
