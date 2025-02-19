export const Results = ({results}) => { 
    console.log(results)
    return <>
      <h2>Resultados</h2>
      {results.map((element, index) => {
         
         return <div key={index}>
         <h3>{element.name.common}</h3>
         <h4>{element.capital ? element.capital [0] : "No tiene capital" }</h4>
         <h4>{element.population}</h4>
         <img src={element.flags.svg} height={50} alt="" />
    </div>


})}

</>
}