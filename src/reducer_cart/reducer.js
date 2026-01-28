import { TYPES } from "./actions";

export function reducer(state, action){
    switch(action.type){
        case TYPES.ADD_TO_CART: {
           const newItem = state.products.find(product => product.id === action.payload)

           return {
            ...state,
            cart: [...state.cart, newItem] 
           }
        }
        case TYPES.REMOVE_ONE_ITEM: {}
        case TYPES.REMOVE_ALL_ITEMS: {}
        default: 
            return state;
    }
}