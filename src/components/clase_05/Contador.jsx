

import {useReducer} from 'react'
import { TYPES } from '@/reducer/actions';
import { initialState } from '@/reducer/initialState';
import { reducer } from '@/reducer/reducer';

const Contador = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const incrementar = () => dispatch({type: TYPES.INCREMENTAR})
    
    const resetear = () => dispatch({type: TYPES.RESETEAR})

    const decrementar = () => dispatch({type: TYPES.DECREMENTAR})

    const manejarVisibilidad = () => dispatch({type: TYPES.MANEJAR_VISBILIDAD})

  return (
    <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }}>
        <div>
            <button onClick={incrementar} id="DECREMENTAR">-</button>
            <button onClick={resetear} id="RESETEAR">0</button>
            <button onClick={decrementar} id="INCREMENTAR">+</button>
            <button onClick={manejarVisibilidad} id='MANEJAR_VISIBILIDAD'>Mostrar/Ocultar</button>
        </div>
        {
            state.visible && <h3>{state.contador}</h3>
        }
    </div>
  )
}

export default Contador





// >>>>>>> Version dinamica via mapeo <<<<<<<<
// const handleState = (event) => {
//     const actions = ["INCREMENTAR", "DECREMENTAR", "RESETEAR", "MANEJAR_VISIBILIDAD"]

//     const id = event.target.id; // "DECREMENTAR"

//     const action = actions.find(action => action === id);

//     dispatch({type: action});
// }
// INVESTIGAR USAR EL HOOK useRef EN LUGAR DE EL OBJETO EVENT