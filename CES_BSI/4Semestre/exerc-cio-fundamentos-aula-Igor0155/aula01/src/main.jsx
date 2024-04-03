import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Titulo from './components/base/Titulo'
import Cards from './components/base/Cards'
import Card from './components/base/Card'
import Simples from './components/exercicios/exemplo01/Simples'
import Aluno from './components/exercicios/exemplo02/Aluno'
import Repeticao from './components/exercicios/exercicio3/Repeticao'
import Familia from './components/exercicios/exemplo04/Familia'
import FamiliaMembro from './components/exercicios/exemplo04/FamiliaMembro'
import ImparPar from './components/exercicios/exemplo05/ImparPar'
import Exercicio1 from './components/exercicios/exercicio1_componentes/Exercicio1'
import Empresa from './components/exercicios/exemplo06/Empresa'
import Funcionario from './components/exercicios/exemplo06/Funcionario'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Titulo />
    <Cards height="400px" display="flex">
      <Card titulo="#1 - Componente Simples" color="#05f">
        <Simples />
      </Card>

      <Card titulo="#2 - Passagem de Paramêtro" color="#333">
        <Aluno matricula="123" nome="Zezin da Silva"
          nota="3" />
      </Card>

      <Card titulo="#3 - Repetição" color="#678">
        <Repeticao />
      </Card>

      <Card titulo="#4 - Filho Pegando Valor do Pai" color="#508">
        <Familia sobrenome="Martins">
          <FamiliaMembro nome="Daves" />
          <FamiliaMembro nome="Gustin" />
          <FamiliaMembro nome="Zezin" />
        </Familia>
      </Card>

      <Card titulo="#5 - Renderização Condicional">
        <ImparPar numero={17} />
        <ImparPar numero={18} />
      </Card>


    </Cards>
    <Cards height="auto" display="flex">
      <Card titulo="#1 Exercicio - Tabela Itens" color="#000" >
        <Exercicio1 />
      </Card>

      <Card titulo="#6 - Parametro Indireto">

        <Empresa nome="XPTO">
          <Funcionario nome="Zezin" salario={800} />
          <Funcionario nome="Pedrin" salario={500} />
        </Empresa>

      </Card>
    </Cards>

  </React.StrictMode>,
)
