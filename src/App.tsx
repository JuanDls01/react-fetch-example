import { createContext, useEffect, useState } from "react";
import {
  AddProductForm,
  Navbar,
  ProductCard,
  ThemeTogglerBttn,
} from "./components";
import { useReloadContext } from "./Context/ReloadContext";
import { useThemeContext } from "./Context/ThemeContext";
import { ProductType } from "./models/products";
import { getPorducts } from "./services/getProducts.service";

type ProductList = ProductType[];

function App() {
  const [productList, setProductList] = useState<ProductList>([]);
  const [updated, setUpdated] = useState<number>(0);
  const { theme } = useThemeContext();
  const { reload } = useReloadContext();

  useEffect(() => {
    getPorducts().then((products) => {
      setProductList(products);
    });
  }, [reload]);

  return (
    <div className={`${theme} flex flex-col justify-between items-center`}>
      <Navbar />
      <div className='h-screen w-96 flex flex-col m-4'>
        <h3 className={`${theme} text-2xl font-bold mb-5`}>Create Product</h3>
        <AddProductForm />
        <h3 className={`${theme} text-2xl font-bold mb-5`}>Products List</h3>
        {productList ? (
          productList.map((product, index) => {
            return (
              <ProductCard
                key={index}
                id={product.id}
                name={product.name}
                marca={product.marca}
              />
            );
          })
        ) : (
          <p>No product founded</p>
        )}
      </div>
    </div>
  );
}

export default App;
