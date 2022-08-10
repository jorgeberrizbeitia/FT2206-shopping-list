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

  const addNewProductToList = (product) => {
    console.log(product)

    setProducts( [...products, product] )

  }

  return (
    <div>
      
      <h2>Lista de Compra</h2>

      <AddForm addNewProductToList={addNewProductToList}/>

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