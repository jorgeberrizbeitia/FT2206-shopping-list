import {useState} from "react"

import AddForm from '../components/AddForm'
import Item from '../components/Item'
import Search from '../components/Search'

const testProducts = [
  { name: "Agua", price: 1 },
  { name: "Piña", price: 2 },
  { name: "Pasta", price: 1.5 }
]

function ShoppingList() {

  const [products, setProducts] = useState(testProducts)
  const [isFormShowing, setIsFormShowing] = useState(false)

  const addNewProductToList = (product) => {
    console.log(product)

    setProducts( [...products, product] )
    // setIsFormShowing(false) // opcionalmente aqui
    toggleFormShowing() // opcionalmente invocar la funcion
  }

  const toggleFormShowing = () => {
    // if (isFormShowing === true) {
    //   setIsFormShowing(false)
    // } else {
    //   setIsFormShowing(true)
    // }
    setIsFormShowing(!isFormShowing)

  }

  return (
    <div>
      
      <h2>Lista de Compra</h2>

      <button onClick={toggleFormShowing}>{isFormShowing === true ? "Ocultar Formulario" : "Mostrar Formulario"}</button>

      {/* <AddForm addNewProductToList={addNewProductToList}/> */}
      {isFormShowing === true ? <AddForm addNewProductToList={addNewProductToList} setIsFormShowing={setIsFormShowing}/> : null}

      <hr />

      <Search />

      <hr />

      {products.map((eachProduct, index) => {
          return (
            <Item key={eachProduct.name+index} eachProduct={eachProduct}/>
          )
      })}


    </div>
  )
}

export default ShoppingList