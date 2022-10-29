import { useState } from "react";
import { useReloadContext } from "../Context/ReloadContext";
import { ProductType } from "../models/products";
import { updateProduct } from "../services";
import { inputType } from "./AddProductForm";

type props = ProductType & {
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
};

const UpdateProductForm: React.FC<props> = ({
  id,
  name,
  marca,
  setIsEditing,
}) => {
  const [productDetails, setProductDetails] = useState<inputType>({
    name: name,
    marca: marca,
  });
  const [backendErrors, setBackendErrors] = useState<string>("");
  const { setReload } = useReloadContext();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setBackendErrors("");
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await updateProduct({ ...productDetails, id: id })
      .then((response) => {
        setReload((prev) => prev + 1);
        setProductDetails({
          name: "",
          marca: "",
        });
        setIsEditing((prev) => !prev);
      })
      .catch((err) => {
        setBackendErrors(`${err}`);
      });
  };

  return (
    <>
      <form onSubmit={(e) => submitHandler(e)}>
        <div className='flex'>
          <label className='text-lg text-white mr-1.5'>Name:</label>
          <input
            type='text'
            name='name'
            placeholder={name}
            value={productDetails.name}
            onChange={(e) => handleInput(e)}
            className='text-lg text-white w-4/6 bg-transparent focus:outline-none focus:border-0 focus:ring-0 placeholder:italic placeholder:text-slate-600'
          />
        </div>
        <div className='flex'>
          <label className='text-lg text-white mr-1'>Brand:</label>
          <input
            type='text'
            name='marca'
            placeholder={marca}
            value={productDetails.marca}
            onChange={(e) => handleInput(e)}
            className='text-lg text-white w-4/6 bg-transparent focus:outline-none focus:border-0 focus:ring-0 placeholder:italic placeholder:text-slate-600'
          />
        </div>
        {backendErrors ? (
          <p className='text-red-400 font-extraligth text-xs mb-3'>
            {backendErrors}
          </p>
        ) : null}
        <input
          type='submit'
          className='h-8 w-full mt-2 bg-sky-500 flex justify-center items-center rounded hover:bg-sky-400 active:ring active:ring-sky-600 text-white '
          value='Save'
        />
      </form>
    </>
  );
};
export default UpdateProductForm;
