import { Navbar } from "./components";
import { Route, Routes } from "react-router-dom";
import { useThemeContext } from "./Context/ThemeContext";
import { CreateProduct, Home } from "./pages";

function App() {
  const { theme } = useThemeContext();

  return (
    <div className={`${theme} flex flex-col justify-between items-center`}>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/create-product' element={<CreateProduct />} />
      </Routes>
    </div>
  );
}

export default App;
