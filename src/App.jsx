import { useState } from 'react'
import './App.css'
import { Search } from './components/Search'
import { Results } from './components/Results'

function App() {
  const [results,setResults] = useState ([]) 
  console.log(results) 

  return (
    <>
      <h1>Buscador de paises</h1>
      <Search setResults = {setResults}/>
      <Results results = {results}/>

</>
  )
}

export default App
