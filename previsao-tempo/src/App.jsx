import Busca from './components/Busca'
import React, {useState} from 'react'
import PrevisaoLista from './components/PrevisaoLista'

const App = () => {
  const [dadosBusca, setDadosBusca] = useState([])
  return (
    <div>
      <Busca setBusca={setDadosBusca} />
      <PrevisaoLista dados={dadosBusca} />
    </div>
    
  )
}

export default App