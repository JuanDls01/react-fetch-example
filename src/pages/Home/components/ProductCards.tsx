import { ProductType } from "../../../models/products";
import ProductCard from "./ProductCard";
import CircularProgress from "@mui/material/CircularProgress";

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
        <CircularProgress />
      )}
    </div>
  );
};
export default ProductCards;
