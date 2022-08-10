import { useState } from "react"

import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';

function AddForm(props) {

  const [name, setName] = useState("")
  const [price, setPrice] = useState(0)

  const handleNameChange = (event) => {
    // actualizar el estado name con lo que el usuario escriba en el campo
    let inputValue = event.target.value
    setName(inputValue)
  }

  const handlePriceChange = (event) => setPrice(Number(event.target.value))

  const handleSubmit = (event) => {

    // antes de hacer nada en un submit
    event.preventDefault() // prevenir el comportamiento predeterminado del formulario

    const productToAdd = {
      name: name,
      price: price
    }

    props.addNewProductToList(productToAdd)
    // quiero enviar esta informacion al estado products
    // quiero actualizar el estado products con este obj

    // limpiar los campos
    setName("")
    setPrice(0)
    // props.setIsFormShowing(false) // opcionalmente aqui
  }

  return (
    <div>
      
      <h4>AddForm</h4>

      <Form onSubmit={handleSubmit}>

      <Form.Group className="mb-3">

      

        <Form.Label htmlFor="name">Nombre:</Form.Label>
        <Form.Control type="text" name="name" onChange={handleNameChange} value={name}/>

        <br />

        <Form.Label htmlFor="price">Precio:</Form.Label>
        <Form.Control type="number" name="price" onChange={handlePriceChange} value={price}/>

        <br />

        <Button
        type="submit"
        variant="success">
          Agregar
        </Button>

        </Form.Group>

      </Form>



    </div>
  )
}

export default AddForm