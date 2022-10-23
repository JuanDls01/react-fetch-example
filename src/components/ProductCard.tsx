import { ProductType } from "../models/products";
import DeleteProductBttn from "./DeleteProductBttn";

const ProductCard: React.FC<ProductType> = ({ id, name, marca }) => {
  return (
    <div className='min-h-12 bg-[#363636] rounded flex justify-between items-center flex-row p-3 mb-2'>
      <div className='w-80'>
        <p className={`text-lg text-white`}>Nombre: {name}</p>
        <p className={`text-lg text-white`}>Marca: {marca}</p>
      </div>
      <DeleteProductBttn id={id} />
    </div>
  );
};
export default ProductCard;
