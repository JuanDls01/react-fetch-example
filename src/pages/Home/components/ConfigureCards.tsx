import { usePageContext } from "../../../Context/PageContext";
import { useReloadContext } from "../../../Context/ReloadContext";
import { themes, useThemeContext } from "../../../Context/ThemeContext";

const ConfigureCards = () => {
  const { paginate, setPaginate } = usePageContext();
  const { theme } = useThemeContext();
  const { setReload } = useReloadContext();

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPaginate((prev) => ({ ...prev, prodPerPage: Number(e.target.value) }));
    setReload((prev) => prev + 1);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setPaginate((prev) => ({
      ...prev,
      searchDetails: {
        searchValue: "",
        searchBy: "name",
      },
    }));
    setReload((prev) => prev + 1);
  };

  return (
    <div
      className={`h-12 flex items-center justify-around my-4 ${
        theme === themes.dark
          ? "border-white text-white"
          : "border-gray-400 text-black"
      }`}
    >
      <div className='h-full flex flex-row justify-around w-1/2'>
        <label htmlFor='prodPerPage' className='flex items-center'>
          Products per Page:
        </label>
        <select
          name='prodPerPage'
          value={paginate.prodPerPage}
          onChange={(e) => handleSelect(e)}
          className='h-10 w-10 flex items-center justify-center h-full bg-transparent focus:outline-none rounded-md focus:border-indigo-500 focus:ring-indigo-500 focus:ring-2'
        >
          <option className='flex items-center justify-center'>4</option>
          <option className='flex items-center justify-center'>5</option>
          <option className='flex items-center justify-center'>7</option>
        </select>
      </div>
      <button
        onClick={(e) => handleClick(e)}
        disabled={!paginate.searchDetails.searchValue}
        className={`h-full w-36 rounded  ${
          !paginate.searchDetails.searchValue
            ? "text-gray-300 bg-indigo-400"
            : "text-white bg-indigo-500"
        }`}
      >
        Get all products
      </button>
    </div>
  );
};
export default ConfigureCards;
