import { useState, useEffect } from "react";
import { usePageContext } from "../../Context/PageContext";
import { useReloadContext } from "../../Context/ReloadContext";
import { useThemeContext } from "../../Context/ThemeContext";
import { ProductType } from "../../models/products";
import { getProducts } from "../../services";

import Paginated from "./components/Paginated";
import ProductCards from "./components/ProductCards";

type ProductList = ProductType[];

const Home = () => {
  const [productList, setProductList] = useState<ProductList | undefined>();
  const { currentPage, setNumberOfPages } = usePageContext();
  const { theme } = useThemeContext();
  const { reload } = useReloadContext();

  useEffect(() => {
    let isActive = true;
    getProducts(currentPage).then((response) => {
      if (isActive) {
        setProductList(response.products);
        setNumberOfPages(response.pages);
      }
    });
    return () => {
      isActive = false;
    };
  }, [reload | currentPage]);

  return (
    <div className='h-screen w-96 flex flex-col m-4'>
      <h1 className={`${theme} text-4xl font-bold mb-5`}>Products List</h1>
      <ProductCards productList={productList} />
      <Paginated />
    </div>
  );
};
export default Home;
