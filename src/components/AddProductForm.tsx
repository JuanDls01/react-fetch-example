import React, { useState } from "react";
import { createProduct } from "../services/createProduct.service";

type props = {
  setUpdated: React.Dispatch<React.SetStateAction<number>>;
};

export type inputType = {
  name: string;
  marca: string;
};

const AddProductForm = ({ setUpdated }: props) => {
  const [productDetails, setProductDetails] = useState<inputType>({
    name: "",
    marca: "",
  });

  // const { updated, setUpdated } = useUpdatedContext();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(productDetails);
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createProduct(productDetails).then((response) =>
      setUpdated((prev) => prev + 1)
    );
    setProductDetails({
      name: "",
      marca: "",
    });
  };

  return (
    <>
      <form onSubmit={(e) => submitHandler(e)}>
        <input
          type='text'
          name='name'
          placeholder='iPhone 12'
          value={productDetails.name}
          onChange={(e) => handleInput(e)}
          className='h-10 w-full p-2 mb-4 flex items-center justify-center text-white rounded focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 bg-gray-900 border border-gray-800 placeholder:italic placeholder:text-slate-600'
        />
        <input
          type='text'
          name='marca'
          placeholder='Apple'
          value={productDetails.marca}
          onChange={(e) => handleInput(e)}
          className='h-10 w-full p-2 mb-4 flex items-center justify-center text-white rounded focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 bg-gray-900 border border-gray-800 placeholder:italic placeholder:text-slate-600'
        />
        <input
          type='submit'
          className='h-10 w-full mb-4 bg-indigo-500 flex justify-center items-center rounded hover:bg-indigo-400 active:ring active:ring-indigo-600 text-white '
          value='Cargar'
        />
      </form>
    </>
  );
};
export default AddProductForm;
