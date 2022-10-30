import React, { useState } from "react";
import { useReloadContext } from "../../../Context/ReloadContext";
import { themes, useThemeContext } from "../../../Context/ThemeContext";
import { createProduct } from "../../../services/createProduct.service";

export type inputType = {
  name: string;
  marca: string;
};

const AddProductForm: React.FC = () => {
  const [productDetails, setProductDetails] = useState<inputType>({
    name: "",
    marca: "",
  });

  const { theme } = useThemeContext();
  const { setReload } = useReloadContext();

  const [backendErrors, setBackendErrors] = useState<string>("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setBackendErrors("");
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createProduct(productDetails)
      .then((response) => {
        setReload((prev) => prev + 1);
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
      <form
        className='h-52 flex flex-col justify-around'
        onSubmit={(e) => submitHandler(e)}
      >
        <div className='relative items-center'>
          <input
            type='text'
            name='name'
            // placeholder='iPhone 12'
            value={productDetails.name}
            onChange={(e) => handleInput(e)}
            className={`h-10 w-full p-2 my-4 flex items-center justify-center ${
              theme === themes.dark
                ? "text-white bg-gray-900 border-gray-800"
                : "text-black bg-gray-300 border-gray-200"
            } rounded border focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 transition-colors peer`}
            // placeholder:italic placeholder:text-slate-600
          />
          <label
            htmlFor='name'
            className={`absolute left-0 top-4 p-2 text-gray-600 cursor-text peer-focus:text-md peer-focus:-top-5 peer-focus:text-indigo-600 transition-all ${
              !productDetails.name ? "" : "-top-5 text-indigo-600"
            }`}
          >
            Name
          </label>
        </div>
        <div className='relative items-center'>
          <input
            type='text'
            name='marca'
            // placeholder='Apple'
            value={productDetails.marca}
            onChange={(e) => handleInput(e)}
            className={`h-10 w-full p-2 my-4 flex items-center justify-center ${
              theme === themes.dark
                ? "text-white bg-gray-900 border-gray-800"
                : "text-black bg-gray-300 border-gray-200"
            } rounded border focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 transition-colors peer`}
          />
          <label
            htmlFor='marca'
            className={`absolute left-0 top-4 p-2 text-gray-600 cursor-text peer-focus:text-md peer-focus:-top-5 peer-focus:text-indigo-600 transition-all ${
              !productDetails.marca ? "" : "-top-5 text-indigo-600"
            }`}
          >
            Marca
          </label>
        </div>
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
