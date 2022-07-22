import naolembrei from "../img/naolembrei.svg"
import quasenaolembrei from "../img/quasenaolembrei.svg"
import zap from "../img/zap.svg"

export default function Concluidos({icones, numpergunta}){

    return(
        <div className="concluido">
            <p>{numpergunta}/4 CONCLUÍDOS</p>
            <div className="imgs">{icones.map((icone)=>{
                if(icone === "naolembrei"){
                    return <img src={naolembrei} alt={icone}/>
                }else if(icone === "quasenaolembrei"){
                    return <img src={quasenaolembrei} alt={icone}/>
                }else if(icone === "zap"){
                    return <img src={zap} alt={icone}/>
                }
            })}</div>
        </div>
    )
}