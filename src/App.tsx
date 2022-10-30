import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import { useThemeContext } from "./Context/ThemeContext";
// import { CreateProduct, Home } from "./pages";

const Home = lazy(() => import("./pages/Home/Home"));
const CreateProduct = lazy(() => import("./pages/CreateProduct/CreateProduct"));

function App() {
  const { theme } = useThemeContext();

  return (
    <div
      className={`${theme} flex flex-col h-screen justify-between items-center`}
    >
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/create-product' element={<CreateProduct />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
