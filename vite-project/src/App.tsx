import { useState} from 'react'
import './App.css'
import { Home } from './pages/Home/Home'

function App() {
  const [home, setHome] = useState<string[]>([
    'Home 1',
    'Home 2',
    'Home 3',
  ])

  function createHome() {
    setHome([...home, 'Home+'])
  }
  return (
    <div>
      {home.map(home => {
        return <Home text={home}/>
      })}
      <button onClick={createHome}>Adicionar Home</button>
    </div>
  );
}

export default App