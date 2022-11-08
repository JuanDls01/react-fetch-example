import { useState, useEffect } from "react";
import { usePageContext } from "../../Context/PageContext";
import { useProductContext } from "../../Context/ProductContext";
import { useReloadContext } from "../../Context/ReloadContext";
import { useThemeContext } from "../../Context/ThemeContext";
import { ProductType } from "../../models/products";
import { getProducts } from "../../services";

import Paginated from "./components/Paginated";
import ProductCards from "./components/ProductCards";

const Home = () => {
  const { theme } = useThemeContext();

  return (
    <div className='h-screen w-96 flex flex-col m-4'>
      <h1 className={`${theme} text-4xl font-bold mb-5`}>Products List</h1>
      <ProductCards />
      <Paginated />
    </div>
  );
};
export default Home;
