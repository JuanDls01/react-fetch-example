import { useState, useEffect } from "react";
import { ProductCard } from "../components";
import { useReloadContext } from "../Context/ReloadContext";
import { useThemeContext } from "../Context/ThemeContext";
import { ProductType } from "../models/products";
import { getPorducts } from "../services";

type ProductList = ProductType[];

const Home = () => {
  const [productList, setProductList] = useState<ProductList>([]);

  const { theme } = useThemeContext();
  const { reload } = useReloadContext();

  useEffect(() => {
    getPorducts().then((products) => {
      setProductList(products);
    });
  }, [reload]);

  return (
    <div className='h-screen w-96 flex flex-col m-4'>
      <h1 className={`${theme} text-4xl font-bold mb-5`}>Products List</h1>
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
  );
};
export default Home;
