import { useState } from "react";
import { ProductType } from "../models/products";
import { updateProduct } from "../services";
import { inputType } from "./AddProductForm";

type props = ProductType & {
  setIsUpdating: React.Dispatch<React.SetStateAction<boolean>>;
  setUpdated: React.Dispatch<React.SetStateAction<number>>;
};

const UpdateProductForm: React.FC<props> = ({
  id,
  name,
  marca,
  setIsUpdating,
}) => {
  const [productDetails, setProductDetails] = useState<inputType>({
    name: "",
    marca: "",
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await updateProduct({ ...productDetails, id: id });
    setProductDetails({
      name: "",
      marca: "",
    });
    setIsUpdating((prev) => !prev);
  };

  return (
    <>
      <form
        onSubmit={(e) => submitHandler(e)}
        // className='h-full flex place-content-around flex-col'
      >
        <input
          type='text'
          name='name'
          placeholder={name}
          value={productDetails.name}
          onChange={(e) => handleInput(e)}
          className='h-8 w-full mb-3 p-1 flex items-center justify-center rounded focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 border border-gray-800 placeholder:italic placeholder:text-slate-600'
        />
        <input
          type='text'
          name='marca'
          placeholder={marca}
          value={productDetails.marca}
          onChange={(e) => handleInput(e)}
          className='h-8 w-full mb-3 p-1 flex items-center justify-center rounded focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 border border-gray-800 placeholder:italic placeholder:text-slate-600'
        />
        <input
          type='submit'
          className='h-8 w-full bg-sky-500 flex justify-center items-center rounded hover:bg-sky-400 active:ring active:ring-sky-600 text-white '
          value='Guardar'
        />
      </form>
    </>
  );
};
export default UpdateProductForm;
