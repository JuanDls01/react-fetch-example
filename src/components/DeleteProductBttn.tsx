import { useReloadContext } from "../Context/ReloadContext";
import { deleteProduct } from "../services/deleteProduct.service";

type props = {
  id: number;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
};

const DeleteProductBttn = ({ id, setIsEditing }: props) => {
  const { setReload } = useReloadContext();
  const handleClick = () => {
    deleteProduct(id).then((response) => setReload((prev) => prev + 1));
    setIsEditing(false);
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
