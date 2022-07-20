import Perguntas from "./Perguntas"

export default function TelaJogo(){
    return(
        <div className="container-telajogo">
            <div className="header">
                <img src="img/logo2.svg" alt="logo2.svg"/>
                <p>ZapRecall</p>
            </div>
            <Perguntas/>
        </div>
    )
}