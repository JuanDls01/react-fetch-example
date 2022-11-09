import ProductCard from "./ProductCard";
import { useEffect } from "react";
import CardsProgress from "./CardsProgress";
import { useProductContext } from "../../../Context/ProductContext";

const ProductCards = () => {
  const { products } = useProductContext();
  useEffect(() => {
    console.log(products);
  }, []);
  return (
    <div className='h-full flex flex-col items-center'>
      {products.length === 0 ? (
        <CardsProgress />
      ) : (
        products.map((product, index) => {
          return (
            <ProductCard
              key={index}
              id={product.id}
              name={product.name}
              brand={product.brand}
            />
          );
        })
      )}
    </div>
  );
};
export default ProductCards;
