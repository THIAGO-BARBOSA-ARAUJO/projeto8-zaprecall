import naolembrei from "../img/naolembrei.svg"
import quasenaolembrei from "../img/quasenaolembrei.svg"
import zap from "../img/zap.svg"
import Resposta from "./Resposta"
import triste from "../img/sad 7.svg"
import feliz from "../img/party 2.svg"

export default function Concluidos({icones, numpergunta}){
    let result
    let deuruim = icones.includes("naolembrei")
    if (icones.length === 4){
        if(deuruim){
            result = "deuruim"
        }else{
            result = "deubom"
        }   
    }
    
    return(
        <div className="concluido">
            {result === "deuruim" ? 
            (<Resposta titulo={"Putz..."} texto={"Ainda faltam alguns... Mas não desanime!"} img={triste} />)
            : result === "deubom" ? (<Resposta titulo={"Parabéns!"} texto={"Você não esqueceu de nenhum flashcard!"} img={feliz} />) 
            : "" }
                
            <p>{numpergunta}/4 CONCLUÍDOS</p>
            <div className="imgs">{icones.map((icone, key)=>{
                if(icone === "naolembrei"){
                    return <img key={key} src={naolembrei} alt={icone}/>
                }else if(icone === "quasenaolembrei"){
                    return <img key={key} src={quasenaolembrei} alt={icone}/>
                }else if(icone === "zap"){
                    return <img key={key} src={zap} alt={icone}/>
                }
            })}</div>
        </div>
    )
}