import { useState } from "react"


const Funcionario = ( {nome, salario, soma}  )=>{
    const [visivel, setVisivel] = useState(true)
    // soma(salario)
    const click = ()=>{
            soma(salario) 
            setVisivel(false)
    }

    return(
        <p>{nome} - R$ {salario} 
        { visivel && 
        <button onClick={click}>
            ok</button>
        }
        {/* <button onClick={soma(salario)}>ok</button> */}
        </p>
    )
}

export default Funcionario