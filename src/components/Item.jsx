import ListGroup from 'react-bootstrap/ListGroup';

function Item(props) {

  const {name, price} = props.eachProduct

  return (
    <ListGroup.Item>
      <p>
        {/* <span>nombre: {props.eachProduct.name}</span>/
        <span>precio: {props.eachProduct.price}€</span> */}
        <span>nombre: {name}</span>/
        <span>precio: {price}€</span>
      </p>
    </ListGroup.Item>
  );
}

export default Item;
