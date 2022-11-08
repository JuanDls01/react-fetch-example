import React, { useEffect, useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { themes, useThemeContext } from "../Context/ThemeContext";

export type searchDetailsType = {
  searchValue: string;
  searchBy: string;
};

type inputSelectTypeEvent =
  | React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLSelectElement>;

const SearchBar: React.FC = () => {
  const [searchDetails, setSearchDetails] = useState<searchDetailsType>({
    searchValue: "",
    searchBy: "name",
  });
  const { theme } = useThemeContext();

  const handleInput = (e: inputSelectTypeEvent) => {
    setSearchDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("input", searchDetails);
    // await searchProduct().then((response) => {
    //     setProductList(response)
    //     setReload((prev) => prev+1)
    //     setInput('')
    // })
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
