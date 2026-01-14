import { TYPES } from "./actions"


export function reducer(state, action){
    switch(action.type){
        case TYPES.INCREMENTAR: {
            return {
                ...state,
                contador: state.contador + 1
            }
        }
        case TYPES.RESETEAR: {
            return {
                ...state,
                contador: 0
            }
        }
        case TYPES.DECREMENTAR: {
            return {
                ...state,
                contador: state.contador - 1
            }
        }
        case TYPES.MANEJAR_VISBILIDAD: {
            return {
                ...state,
                visible: !state.visible
            }   
        }
        default: {
            return state
        }
    }
}
