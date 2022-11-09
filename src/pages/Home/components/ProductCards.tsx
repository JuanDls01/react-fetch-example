import ProductCard from "./ProductCard";
import CardsProgress from "./CardsProgress";
import { useProductContext } from "../../../Context/ProductContext";

const ProductCards = () => {
  const { products } = useProductContext();

  return (
    <div className='h-96 flex flex-col items-center'>
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
