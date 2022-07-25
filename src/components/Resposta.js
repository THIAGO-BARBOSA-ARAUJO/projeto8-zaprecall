export default function Resposta({titulo, img, texto}){
    return(
        <div className="container">
            <div className="container-concluido">
                <img src={img} alt="img"/>
                <p>{titulo}</p>
            </div>
            <div className="resp"><p>{texto}</p>
            </div>
        </div>
    )
}