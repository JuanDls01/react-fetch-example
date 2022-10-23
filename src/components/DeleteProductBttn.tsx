import { ProductType } from "../models/products";
import { deleteProduct } from "../services/deleteProduct.service";

type props = {
  id: number;
  setProductList?: React.Dispatch<React.SetStateAction<ProductType[]>>;
};

const DeleteProductBttn = ({ id }: props) => {
  const handleClick = () => {
    deleteProduct(id);
    // setProductList((prev) => prev);
  };
  return (
    <button
      onClick={handleClick}
      className='h-10 w-10 p-2 flex items-center justify-center text-white bg-red-500 hover:bg-red-400 rounded'
    >
      X
    </button>
  );
};
export default DeleteProductBttn;
