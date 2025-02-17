import { useState } from 'react'
import './App.css'
import { Search } from './components/Search'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Buscador de paises</h1>
      <Search />
    </>
  )
}

export default App
