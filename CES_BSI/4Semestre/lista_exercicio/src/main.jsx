import React from 'react'
import ReactDOM from 'react-dom/client'
import Cards from './components/base/Cards'
import Card from './components/base/Card'
import './index.css'
import Calculator from './components/exercicios/exercicio1_calculadora/calculator'
import LikeButton from './components/exercicios/exercicio2_likes/likebuton'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Cards height="auto" display="flex">
      <Card titulo="#1 - Calculadora">
        <Calculator/>
        
      </Card>
      <Card titulo="#2 - Likes" color='#F258'>
      <LikeButton/>
      </Card>

    </Cards  >
     </React.StrictMode>
);
