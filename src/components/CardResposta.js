
export default function CardResposta({setIcones, numpergunta, resposta, setNumpergunta, setInicio}){
    
    function handleClick(str){
        setInicio(str) 
        setNumpergunta( numpergunta + 1 )
        setIcones((data)=> [...data, str])
    }

    return(
        <div className="cardresposta">
            <div></div>
            <p>{resposta}</p>
            <div className="btns">
                <button onClick={() => handleClick("naolembrei")}>Não lembrei</button>
                <button onClick={() => handleClick("quasenaolembrei")} >Quase não lembrei</button>
                <button onClick={() => handleClick("zap")} >Zap!</button>
            </div>
        </div>
    )
}

