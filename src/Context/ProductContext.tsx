import { createContext, useState, useContext } from "react";
import { ProductType } from "../models/products";

type productContextType = {
  products: ProductType[];
  setProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
  //   setProducts: React.Dispatch<React.SetStateAction<Array<ProductType>>>;
};

export const ProductContext = createContext<productContextType | undefined>(
  undefined
);

type props = { children: React.ReactNode };

const ProductProvider: React.FC<props> = ({ children }) => {
  const [products, setProducts] = useState<ProductType[]>([]);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
export default ProductProvider;

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (context === undefined)
    throw new Error(
      "ProductContext must be used within a ProductContextProvider"
    );
  return context;
};
