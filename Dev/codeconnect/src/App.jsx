import { useEffect, useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import BarraDePesquisa from './components/BarraDePesquisa'
import Filtro from './components/Filtro'
import Card from './components/Card'

function App() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/MonicaHillman/codeconnect-api/publicacoes')
    .then(resposta => resposta.json())
    .then(dadosDaAPI => setDados(dadosDaAPI))
  },[]);

  console.log(dados);

  return (
    <div className='container'>
      <Sidebar />
      <div>
        <BarraDePesquisa />
        <Filtro />
        <Card />
      </div>
    </div>
  )
}

export default App