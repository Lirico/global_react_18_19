// Paso 1 - Importar la funcion creadora de contexto
import { createContext, useState } from "react";

// Paso 2 - Crear el contexto (la nave)
export const ThemeContext = createContext(); // Contiene una espece de array

const ThemeContextProvider = ({children}) => {
  // Paso 3 - Definir el/los paquete/s que la nave portará.
  const [theme, setTheme] = useState(false);

  const handleTheme = () => setTheme(!theme); 

  const toggleTheme = theme && "dark"

  const toggleIcon = theme ? "☀️" : "🌙"

  const value = { handleTheme, toggleTheme, toggleIcon };

  // Paso 4 - Definir el proveedor (el flaco de la gorra)
  // Paso 5 - Definir el value del provider (la mano del flaco)
  // Paso 6 - Definir la lista de componentes que pueden importar las los paquetes del flaco.
  return (
    <ThemeContext.Provider value={value}>
        {children} 
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
