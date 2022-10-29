import React, { createContext, useState, useContext } from "react";

// Posibles temas, podría definirlos en models?
export const themes = {
  light: "bg-white text-black",
  dark: "bg-black text-white",
};

type themeContextType = {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
};

// const MyContext = React.createContext(defaultValue);
// Creo mi contexto:
export const ThemeContext = createContext<themeContextType | undefined>(
  undefined
);

type props = {
  children: React.ReactNode;
};

// Creo un proveedor del contexto, el cual le permite a todos los componentes
// que esten dentro de él, el uso el contexto
const ThemeProvider: React.FC<props> = ({ children }) => {
  const [theme, setTheme] = useState(themes.dark);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

// Creo un hook (? que me dara acceso al theme y setTheme en mis componentes.
export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context === undefined)
    throw new Error("ThemeContext must be used within a ThemeContextProvider");
  return context;
};

// <MyContext.Provider value={/* some value */}>
