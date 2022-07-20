import CardResposta from "./CardResposta"
import React from "react";

export default function CardPergunta(){
    const options = [
        {
            pergunta:"O que é JSX",
            resposta: "Uma extensão de linguagem do JavaScript"
        },
        {
            pergunta:"O React é __",
            resposta:"uma biblioteca JavaScript para construção de interfaces"
        },
        {
            pergunta:"Componentes devem iniciar com __ ",
            resposta:"letra maiúscula"
        },
        {
            pergunta:"Podemos colocar __ dentro do JSX",
            resposta:"expressões"
        },
        {
            pergunta:"O ReactDOM nos ajuda __",
            resposta:"interagindo com a DOM para colocar componentes React na mesma"
        },
        {
            pergunta:"Usamos o npm para __ ",
            resposta:"gerenciar os pacotes necessários e suas dependências"
        },
        {
            pergunta:"Usamos props para __ ",
            resposta:"passar diferentes informações para componentes "
        },
        {
            pergunta:"Usamos estado (state) para __ ",
            resposta:"dizer para o React quais informações quando dizer para o React quais informações quando "
        }
    ]

    const optionsPergunta = [];

    while (options.length - 7) {

        const index = Math.floor(Math.random() * options.length - 1);

        const [option] = options.splice(index, 1);

        optionsPergunta.push(option);
    } 
    const [tela, setTela] = React.useState(true)

    return (
        <>
            {tela ? (
                <div className="perguntacont">
                    <p>{optionsPergunta[0].pergunta}</p>
                    <img onClick={() => setTela(!tela)} src="img/virar.svg" alt="virar.svg"/>
                </div>
            ) : (
                <CardResposta/>
            )}
        </>
        
    )
}