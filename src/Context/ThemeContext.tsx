import React, { createContext, useState, useContext, useEffect } from "react";

// Posibles temas, podría definirlos en models?
export const themes = {
  light: "bg-white text-black",
  dark: "bg-black text-white",
};

const actualTheme: string | null = !localStorage.getItem("theme")
  ? themes.dark
  : localStorage.getItem("theme");

type themeContextType = {
  theme: string | null;
  setTheme: React.Dispatch<React.SetStateAction<string | null>>;
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
  const [theme, setTheme] = useState(actualTheme);
  useEffect(() => {
    console.log(theme);
  }, []);
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
