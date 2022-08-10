function Item(props) {

  const {name, price} = props.eachProduct

  return (
    <div>
      <p>
        {/* <span>nombre: {props.eachProduct.name}</span>/
        <span>precio: {props.eachProduct.price}€</span> */}
        <span>nombre: {name}</span>/
        <span>precio: {price}€</span>
      </p>
    </div>
  );
}

export default Item;
