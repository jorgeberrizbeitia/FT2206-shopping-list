import { useState } from "react";

import AddForm from "../components/AddForm";
import Item from "../components/Item";
import Search from "../components/Search";

import Button from "react-bootstrap/Button";
import ListGroup from 'react-bootstrap/ListGroup';
import Collapse from 'react-bootstrap/Collapse';

const testProducts = [
  { name: "Agua", price: 1 },
  { name: "Piña", price: 2 },
  { name: "Pasta", price: 1.5 },
];

function ShoppingList() {
  const [products, setProducts] = useState(testProducts);
  const [visibleProducts, setVisibleProducts] = useState(testProducts);
  // const [buscarQuery, setBuscarQuery] = useState("") // 2da opcion filter
  const [isFormShowing, setIsFormShowing] = useState(false);

  const addNewProductToList = (product) => {
    console.log(product);

    setProducts([...products, product]);
    setVisibleProducts([...visibleProducts, product]);
    // setIsFormShowing(false) // opcionalmente aqui
    toggleFormShowing(); // opcionalmente invocar la funcion
  };

  const toggleFormShowing = () => {
    // if (isFormShowing === true) {
    //   setIsFormShowing(false)
    // } else {
    //   setIsFormShowing(true)
    // }
    setIsFormShowing(!isFormShowing);
  };

  const filterProducts = (buscar) => {
    console.log(buscar);

    const filteredArr = products.filter((eachProduct) => {
      return eachProduct.name.includes(buscar);
    });

    setVisibleProducts(filteredArr);

    // setBuscarQuery(buscar) // 2da opcion filter
  };

  return (
    <div>
      <h2>Lista de Compra</h2>

      <Button 
      variant="info" size="sm" 
      style={{color: "red"}}
      onClick={toggleFormShowing}>
        {isFormShowing === true ? "Ocultar Formulario" : "Mostrar Formulario"}
      </Button>

      {/* <AddForm addNewProductToList={addNewProductToList}/> */}
      {isFormShowing === true ? (
        <AddForm
          addNewProductToList={addNewProductToList}
          setIsFormShowing={setIsFormShowing}
        />
      ) : null}
      {/* <Collapse in={isFormShowing}>
        <AddForm
          addNewProductToList={addNewProductToList}
          setIsFormShowing={setIsFormShowing}
          />
      </Collapse> */}

      <hr />

      <Search filterProducts={filterProducts} />

      <hr />

        <ListGroup>
        {visibleProducts
          // .filter((eachProduct) => eachProduct.name.includes(buscarQuery))
          .map((eachProduct, index) => {
            return (
              <Item key={eachProduct.name + index} eachProduct={eachProduct} />
            );
          })}
        </ListGroup>
    </div>
  );
}

export default ShoppingList;
