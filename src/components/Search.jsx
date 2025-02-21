import { useEffect, useRef, useState } from "react"


export const Search = ({setResults, setError}) => {
    const [band,setBand] = useState(false)
    const inputRef = useRef()

    const getCountries = async (name)=> {
        let response = await fetch("https://restcountries.com/v3.1/name/"+name)
        let data = await response.json()
        console.log(data)
        if (data.status == 404) {
            setError(true)
            return
            
        }
        setError(false)
        setResults(data) 
    }

    useEffect(()=>{
        if(band && inputRef.current.value !== ""){
            getCountries(inputRef.current.value)
            
        }

        return setBand(false)
    },[band])

    return <>
        <h3>Buscar pais</h3>
        <input ref={inputRef} onChange={()=>{ setBand(true) }} type="text" placeholder="Ingrese el nombre del pais" />
    </>
}