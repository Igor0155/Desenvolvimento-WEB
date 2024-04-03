import { useState } from 'react'
import ReactDOM from 'react-dom/client'

import './App.css'
import Titulo from './components/base/Titulo'
import Cards from './components/base/Cards'
import Card from './components/base/Card'
import Simples from './components/exercicios/exemplo01/Simples'
import Aluno from './components/exercicios/exemplo02/Aluno'

function App() {
  const [count, setCount] = useState(0)

  return (
<>
     <Titulo />
    <Cards>        
        <Card >
          <Simples />
        </Card>

        <Card>
          <Aluno matricula="123" nome="Zezin daa Silva" 
          nota="3" />
        </Card>

    </Cards>

    </>
  )
}

export default App
