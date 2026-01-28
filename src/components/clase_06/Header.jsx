// Paso 1 - Importar la nave
import { ThemeContext } from "@/context/ThemeContextProvider";
// Paso 2 - Importar el hook (el cartero)
import { useContext } from "react";

const Header = () => {
  // Paso 3 - Destructurar las prosp desde el contexto
  const { handleTheme, toggleTheme, toggleIcon } = useContext(ThemeContext);

  return (
    <>
      <div className={toggleTheme}>
        <button onClick={handleTheme}>{toggleIcon}</button>
      </div>

      <style jsx>{`
        button {
            background-color: transparent;
            border: none;
            font-size: 1.25rem;
            cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default Header;
