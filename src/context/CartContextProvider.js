import { createContext, useReducer, useEffect } from "react";
import { TYPES } from "@/reducer_cart/actions";
import { initialState } from "@/reducer_cart/initialState";
import { reducer } from "@/reducer_cart/reducer";
import axios from "axios";

export const CartContext = createContext(); // Nave

const CartContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const readState = async () => {
      const ENDPOINTS = {
        products: "http://localhost:5000/products",
        cart: "http://localhost:5000/cart"
      };
      const resProducts = await axios.get(ENDPOINTS.products);
      const resCart = await axios.get(ENDPOINTS.cart);
      const products = await resProducts.data;
      const cart = await resCart.data;

      dispatch({type: TYPES.READ_STATE, payload: { products, cart }})
    }

    useEffect(() => {
     readState();
    }, [])
    

    const addToCart = (id) => dispatch({type: TYPES.ADD_TO_CART, payload: id});

    const deleteFromCart = (id, all = false) => {
      if (all) {
        dispatch({type: TYPES.REMOVE_ALL_ITEMS, payload: id});
      } else {
        dispatch({type: TYPES.REMOVE_ONE_ITEM, payload: id});
      }
    }
    const value = {state, addToCart, deleteFromCart};

  return (
    <CartContext.Provider value={value}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
