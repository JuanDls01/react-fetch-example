import { ProductType } from "../../../models/products";
import ProductCard from "./ProductCard";
import CardsProgress from "./CardsProgress";

type props = {
  productList?: ProductType[];
};
const ProductCards = ({ productList }: props) => {
  return (
    <div className='h-96 flex flex-col items-center'>
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
        <CardsProgress />
      )}
    </div>
  );
};
export default ProductCards;
