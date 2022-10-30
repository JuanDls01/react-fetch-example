import { useThemeContext } from "../../Context/ThemeContext";
import AddProductForm from "./components/AddProductForm";

const CreateProduct = () => {
  const { theme } = useThemeContext();
  return (
    <div className='h-screen w-96 flex flex-col m-4'>
      <h1 className={`${theme} text-4xl font-bold mb-5`}>Create Product</h1>
      <AddProductForm />
    </div>
  );
};
export default CreateProduct;
