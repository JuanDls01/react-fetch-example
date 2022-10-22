import React, { useState } from "react";
import { ProductType } from "../models/products";
import { createProduct } from "../services/createProduct.service";

const AddProductForm = () => {
  const [productDetails, setProductDetails] = useState<ProductType>({
    name: "",
    marca: "",
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(productDetails);
  };

  const submitHanlder = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(productDetails);
    // await createProduct(productDetails);
  };

  return (
    <>
      <form onSubmit={(e) => submitHanlder(e)}>
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
