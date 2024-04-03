import { cloneElement, useState } from "react"
import "./Empresa.css"

const Empresa = ( props )=>{

    var {nome, children} = props

    const [sal, mudaSal] = useState(0)

    const soma = (valor)=>{
        mudaSal(sal + valor)
        console.log(sal)
    }
    return(
        <>
            <div className="emp_container"> 
                <h1>{nome}</h1>
                <h2>R$ {sal}</h2>

                { children.map( fm =>{
                 return cloneElement(fm, {"soma":soma})
                }) }

                {/* {children} */}
                {/* <button onClick={soma} >OK</button> */}
            </div>

        </>
    )
}

export default Empresa