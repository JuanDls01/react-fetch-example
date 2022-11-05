import { useState, useEffect } from "react";
import { useReloadContext } from "../../Context/ReloadContext";
import { useThemeContext } from "../../Context/ThemeContext";
import { ProductType } from "../../models/products";
import { getProducts } from "../../services";
import { giveProductsToRender } from "../../utils/giveProductsToRender";
import Paginated from "./components/Paginated";
import ProductCard from "./components/ProductCard";

type ProductList = ProductType[];

const Home = () => {
  const [productList, setProductList] = useState<ProductList>([]);
  const [productsToRender, setProductsToRender] = useState<ProductList>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [numberOfPages, setNumberOfPages] = useState<number>(1);

  const { theme } = useThemeContext();
  const { reload } = useReloadContext();

  useEffect(() => {
    getProducts(currentPage).then((response) => {
      setProductList(response.products);
      setNumberOfPages(response.pages);

      // const productsToRender = giveProductsToRender(10, products, currentPage);
      // console.log("productsToRender", productsToRender);
      // setProductsToRender(productsToRender);
    });
  }, [reload]);

  // useEffect(() => {
  //   const productsToRender = giveProductsToRender(10, productList, currentPage);
  //   setProductList(productsToRender);
  // }, [currentPage]);

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
              brand={product.brand}
            />
          );
        })
      ) : (
        <p>No product founded</p>
      )}
      <Paginated
        numberOfPages={numberOfPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};
export default Home;
