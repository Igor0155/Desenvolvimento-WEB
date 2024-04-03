import './Exercicio1_style.css'

const Exercicio1 = () => {
    const itens = [
        { id: 1, nome: "Caneta", preço: "R$ 2,99" },
        { id: 2, nome: "Lapis", preço: "R$ 1,99" },
        { id: 3, nome: "iPad", preço: "R$ 5899,99" },
        { id: 4, nome: "Samsung S20 Ultra", preço: "R$ 6599,99" },
        { id: 5, nome: "Notebook", preço: "R$ 3409,99" },
        { id: 6, nome: "Caderno", preço: "R$ 19,99" },
        { id: 7, nome: "Borracha", preço: "R$ 4,99" },
        { id: 8, nome: "Impressora", preço: "R$ 889,99" },
        { id: 9, nome: "Monitor 27", preço: "R$ 799,99" },
        { id: 10, nome: "Cadeira", preço: "R$ 1239,99" },
    ];

    return (
        <>

            <div className="container">

                <div className="sorteio">
                    <h1 className="sorteio_title">Valor Aleatório</h1>
                    <p className="sorteio_p"><span className="span">Valor Mínimo: </span>1</p>
                    <p className="sorteio_p"><span className="span">Valor Máximo: </span>60</p>
                    <p className="sorteio_p"><span className="span">Valor Escolhido: </span>26</p>

                </div>

                <table className="tabela_Item">
                    <thead>
                        <tr className="tabela_item_tr">
                            <th className="tabela_item_th">ID</th>
                            <th className="tabela_item_th">Nome</th>
                            <th className="tabela_item_th">Preço</th>
                        </tr>
                    </thead>
                    <tbody>
                        {itens.map((props) => (
                            <tr className="tabela_item_tr" key={props.id}>
                                <td className="tabela_item_td">{props.id}</td>
                                <td className="tabela_item_td">{props.nome}</td>
                                <td className="tabela_item_td">{props.preço}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </>
    )

}

export default Exercicio1