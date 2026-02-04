import { createContext, useReducer } from "react";
import { TYPES } from "@/reducer_cart/actions";
import { initialState } from "@/reducer_cart/initialState";
import { reducer } from "@/reducer_cart/reducer";

export const CartContext = createContext(); // Nave

const CartContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState)

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
