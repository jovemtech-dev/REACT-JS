import './App.css'
import Sidebar from './components/Sidebar'
import BarraDePesquisa from './components/BarraDePesquisa'
import Filtro from './components/Filtro'

function App() {
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