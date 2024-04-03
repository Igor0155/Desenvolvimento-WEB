

const ImparPar = (props) => {

    const ehPAr = () => {
        return (props.numero % 2) == 0
    }

    return (
        <>
            <span>
                {props.numero} é um número
                {(ehPAr()) ? <b> PAR</b> : <b> IMPAR<br /></b>}

                {(props.numero >= 18) &&
                    <b> <br />Maior de Idade</b>
                }

                {/* <If test={ehPAr()}>
         <b> PAR</b> 
       <Else>
            <b> IMPAR</b>
       </Else>
       </If> */}

            </span>
        </>
    )
}

export default ImparPar