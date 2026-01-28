// Paso 1 - Importar la nave
import { ThemeContext } from "@/context/ThemeContextProvider";
// Paso 2 - Importar el hook (el cartero)
import { useContext } from "react";

import React from "react";

const Main = () => {
  // Paso 3 - Destructurar las prosp desde el contexto
  const { toggleTheme } = useContext(ThemeContext);

  return <div style={{ height: "100vh" }} className={toggleTheme}></div>;
};

export default Main;

