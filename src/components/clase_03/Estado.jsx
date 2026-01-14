/* 
    Hasta antes del 2016, los componentes de react eran 
    componentes de clase. Las clases naturalmente pueden
    establencer estados y actualizaciones de estado.

    Las funciones por el contrario no pueden.

    En 2016 se incorporan una serie de funciones nativas
    que le aportan a los componentes funcionales la capacidad
    de establecer estados y actualizaciones.

    Estas funciones se denominan HOOKS (ganchos).

    Vamos a ver 4 hooks:
    - useState 
    - useEffect
    - useContext
    - useReducer

    Otros que provee React son:
    - useRef
    - useMemo
    - useCallback
    - useParams
*/
import { useState } from "react";

const initialState = "Groncho"

const Estado = () => {

    // cabello -> getter
    // setCablleo -> setter
   const [cabello, setCabello] = useState(initialState);

  return (
    <>
        <div>
            <h3>{cabello}</h3>
            <button onClick={() => setCabello(initialState)}>Regresar a la forma base</button>
            <button onClick={() => setCabello("Rubio")}>Transformar en SSJ</button>
            <button onClick={() => setCabello("Rubio con rayitos")}>Transformar en SSJ 2</button>
            <button onClick={() => setCabello("Rubio con rayitos y alta melena")}>Transformar en SSJ 3</button>
        </div>
    </>
  )
}

export default Estado

