import { ProductType } from "../models/products";

const ProductCard: React.FC<ProductType> = ({ name, marca }) => {
  return (
    <div className='min-h-12 bg-[#363636] rounded flex justify-between flex-col p-3 mb-2'>
      <p className={`text-lg text-white`}>Nombre: {name}</p>
      <p className={`text-lg text-white`}>Marca: {marca}</p>
    </div>
  );
};
export default ProductCard;
