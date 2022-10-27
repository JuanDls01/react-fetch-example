import { useState } from "react";
import { ProductType } from "../models/products";
import DeleteProductBttn from "./DeleteProductBttn";
import UpdateProductForm from "./UpdateProductForm";
import { AiTwotoneEdit } from "react-icons/ai";

type props = ProductType & {
  setUpdated: React.Dispatch<React.SetStateAction<number>>;
};

const ProductCard: React.FC<props> = ({ id, name, marca, setUpdated }) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const handleClick = () => {
    setIsUpdating((prev) => !prev);
  };
  return (
    <div className='bg-[#363636] rounded flex justify-between items-center flex-row p-2 mb-2'>
      {/* <div className='flex justify-between items-center flex-row w-full'> */}
      <div className='flex flex-col w-4/6 h-full place-content-around justify-'>
        {!isUpdating ? (
          <>
            <p className={`text-lg text-white`}>Nombre: {name}</p>
            <p className={`text-lg text-white`}>Marca: {marca}</p>
          </>
        ) : (
          <UpdateProductForm
            id={id}
            name={name}
            marca={marca}
            setIsUpdating={setIsUpdating}
            setUpdated={setUpdated}
          />
        )}
      </div>
      <div className='flex justify-between w-24'>
        <button
          onClick={handleClick}
          className='h-10 w-10 p-2 flex items-center justify-center text-white bg-sky-500 hover:bg-sky-400 rounded'
        >
          <AiTwotoneEdit />
        </button>
        <DeleteProductBttn
          id={id}
          setIsUpdating={setIsUpdating}
          setUpdated={setUpdated}
        />
      </div>
    </div>
  );
};
export default ProductCard;
