import { useState } from 'react'

import './App.css'
import Titulo from './components/base/Titulo'
import Cards from './components/base/Cards'
import Card from './components/base/Card'

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
         
        </Card>

    </Cards>

    </>
  )
}

export default App
