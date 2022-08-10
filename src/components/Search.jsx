import { useState } from "react"

function Search(props) {

  const [buscar, setBuscar] = useState("")

  const handleBuscar = (event) => {

    setBuscar(event.target.value)
    
    // aqui buscamos
    // filtrar
    // llevamos el valor del estado buscar a ShoppingList
    props.filterProducts(event.target.value)
  }

  return (
    <div>

      <h4>Search</h4>

        <label htmlFor="buscar">Buscar: </label>
        <input type="text" name="buscar" onChange={handleBuscar} value={buscar}/>

    </div>
  )
}

export default Search