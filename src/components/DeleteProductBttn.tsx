import { deleteProduct } from "../services/deleteProduct.service";

type props = {
  id: number;
  setIsUpdating: React.Dispatch<React.SetStateAction<boolean>>;
  setUpdated: React.Dispatch<React.SetStateAction<number>>;
};

const DeleteProductBttn = ({ id, setIsUpdating, setUpdated }: props) => {
  const handleClick = () => {
    deleteProduct(id).then((response) => setUpdated((prev) => prev + 1));
    setIsUpdating(false);
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
