import "./Simples.css"

const Simples = ()=>{
    var titulo = "Componente Simples"

    const geraTexto = ()=>{
        return "Lorem ipsum dolor sit amet."
    }

return(
    <>
        <h1 className="titulo_simples">{titulo}</h1>
        <p>
            { geraTexto() }
        </p>    
    </>   
)
}
export default Simples