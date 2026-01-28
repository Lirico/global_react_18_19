import { CartContext } from "@/context/CartContextProvider";
import { useContext } from "react";
import Product from "./Product";
import CartItem from "./CartItem";

const Cart = () => {

    const {state, addToCart, deleteFromCart} = useContext(CartContext);

    const {products, cart} = state;

  return (
    <>
      <h2>Carrito de compras</h2>
      <h3>Productos</h3>
      <div className="box grid-responsive">
        {
            products.map(product => <Product key={product.id} product={product} addToCart={addToCart} />)
        }
      </div>
      <h3>Carrito</h3>
      <div className="box">
        {
            cart.map((item, i) => <CartItem key={i} item={item} deleteFromCart={deleteFromCart} />)
        }
      </div>
    </>
  );
};

export default Cart;
