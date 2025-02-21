import { useState } from 'react'
import './App.css'
import { Search } from './components/Search'
import { Results } from './components/Results'

function App() {
  const [results,setResults] = useState ([]) 
  const [error,setError] = useState(false)
  console.log(results) 

  return (
    <>
      <h1>Buscador de paises</h1>
      <Search setResults = {setResults} setError={setError}/>
      <Results results = {results} error={error}/>
      <History countries={countries.length == 1 ? countries[0] : undefined }/>

</>
  )
}

export default App
