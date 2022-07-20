import Pergunta from "./Pergunta"

let num1 = 25

export default function Perguntas(){
    return(
        <div className="perguntas">
            <Pergunta numero="1"/>   
            <Pergunta numero="2"/> 
            <Pergunta numero="3"/> 
            <Pergunta numero="4"/>          
        </div>
    )
}