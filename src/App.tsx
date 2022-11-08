import { Suspense, lazy, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import { usePageContext } from "./Context/PageContext";
import { useProductContext } from "./Context/ProductContext";
import { useReloadContext } from "./Context/ReloadContext";
import { useThemeContext } from "./Context/ThemeContext";
import { useAsyncProducts } from "./hooks/useAsync";
import { getProducts } from "./services";
// import { Home, CreateProduct } from "./pages";

const Home = lazy(() => import("./pages/Home/Home"));
const CreateProduct = lazy(() => import("./pages/CreateProduct/CreateProduct"));

function App() {
  const { products, setProducts } = useProductContext();
  const { currentPage, setNumberOfPages } = usePageContext();
  const { reload } = useReloadContext();
  const { theme } = useThemeContext();

  useAsyncProducts(getProducts, currentPage, setProducts, setNumberOfPages, [
    reload,
    currentPage,
  ]);

  return (
    <div
      className={`${theme} flex flex-col h-screen justify-between items-center`}
    >
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Navigate to={"home"} replace={true} />} />
          <Route path='home' element={<Home />} />
          <Route path='create-product' element={<CreateProduct />} />
          <Route path='*' element={<>PAGE NOT FOUNDED</>} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
