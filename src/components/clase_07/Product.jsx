



const Product = ({product, addToCart}) => { // Producto A -> id

    const {name, price, id} = product;

  return (
    <div className='product'>
        <h4>{name}</h4>
        <h5>${price}</h5>
        <button onClick={() => addToCart(id)}>Agregar</button>
    </div>
  )
}

export default Product