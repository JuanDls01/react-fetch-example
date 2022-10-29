import React, { useState } from "react";
import { themes, useThemeContext } from "../Context";
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

  const [backendErrors, setBackendErrors] = useState<string>("");

  const { theme } = useThemeContext();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setBackendErrors("");
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createProduct(productDetails)
      .then((response) => {
        setUpdated((prev) => prev + 1);
        setProductDetails({
          name: "",
          marca: "",
        });
      })
      .catch((err) => {
        setBackendErrors(`${err}`);
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
          className={`h-10 w-full p-2 mb-4 flex items-center justify-center ${
            theme === themes.dark
              ? "text-white bg-gray-900 border-gray-800"
              : "text-black bg-gray-300 border-gray-200"
          } rounded border focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 placeholder:italic placeholder:text-slate-600`}
        />
        <input
          type='text'
          name='marca'
          placeholder='Apple'
          value={productDetails.marca}
          onChange={(e) => handleInput(e)}
          className={`h-10 w-full p-2 mb-4 flex items-center justify-center ${
            theme === themes.dark
              ? "text-white bg-gray-900 border-gray-800"
              : "text-black bg-gray-300 border-gray-200"
          } rounded border focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 placeholder:italic placeholder:text-slate-600`}
        />
        {backendErrors ? (
          <p className='text-red-400 text-ligth text-xs mb-3'>
            {backendErrors}
          </p>
        ) : null}
        <input
          type='submit'
          className={`h-10 w-full mb-4 ${
            theme === themes.dark
              ? "bg-indigo-500 hover:bg-indigo-400"
              : "bg-indigo-400 hover:bg-indigo-500"
          } flex justify-center items-center rounded  active:ring active:ring-indigo-600 text-white`}
          value='Save'
        />
      </form>
    </>
  );
};
export default AddProductForm;
