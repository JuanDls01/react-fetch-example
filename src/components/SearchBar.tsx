import React, { useState, useEffect } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { usePageContext } from "../Context/PageContext";
import { useReloadContext } from "../Context/ReloadContext";
import { themes, useThemeContext } from "../Context/ThemeContext";
import { searchDetailsType } from "../models";

type inputSelectTypeEvent =
  | React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLSelectElement>;

const SearchBar: React.FC = () => {
  const { paginate, setPaginate } = usePageContext();
  const [searchDetails, setSearchDetails] = useState<searchDetailsType>({
    searchValue: paginate.searchDetails.searchValue,
    searchBy: paginate.searchDetails.searchBy,
  });
  const { setReload } = useReloadContext();
  const { theme } = useThemeContext();
  const { reload } = useReloadContext();

  useEffect(() => {
    setSearchDetails({
      searchValue: paginate.searchDetails.searchValue,
      searchBy: paginate.searchDetails.searchBy,
    });
    console.log("estado local", searchDetails.searchValue);
    console.log("context", paginate.searchDetails.searchValue);
  }, [reload]);

  const handleInput = (e: inputSelectTypeEvent) => {
    setSearchDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPaginate((prev) => ({
      ...prev,
      currentPage: 1,
      searchDetails: {
        searchValue: searchDetails.searchValue,
        searchBy: searchDetails.searchBy,
      },
    }));
    // setSearchDetails({
    //   searchValue: "",
    //   searchBy: "name",
    // });
    setReload((prev) => prev + 1);
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className={`h-8 flex items-center border rounded-md ${
        theme === themes.dark
          ? "border-white text-indigo-300"
          : "border-gray-400 text-indigo-600"
      }`}
    >
      {/* <label htmlFor='search'>Search</label> */}
      <input
        type='text'
        name='searchValue'
        value={searchDetails.searchValue}
        onChange={(e) => handleInput(e)}
        placeholder='Search'
        className='h-full mx-2 w-36 focus:outline-none bg-transparent placeholder:text-slate-600'
      />
      <select
        name='searchBy'
        value={searchDetails.searchBy}
        onChange={(e) => handleInput(e)}
        className='flex items-center justify-center h-full bg-transparent focus:outline-none rounded-md focus:border-indigo-500 focus:ring-indigo-500 focus:ring-2'
      >
        <option>name</option>
        <option>brand</option>
        <option>price</option>
      </select>
      <button
        type='submit'
        className='h-8 w-8 flex justify-center items-center focus:outline-none rounded-md focus:border-indigo-500 focus:ring-indigo-500 focus:ring-2'
      >
        <BiSearchAlt2 />
      </button>
    </form>
  );
};
export default SearchBar;
