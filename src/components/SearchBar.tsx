import React, { useEffect, useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";

const SearchBar: React.FC = () => {
  const [input, setInput] = useState("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // await searchProduct().then((response) => {
    //     setProductList(response)
    //     setReload((prev) => prev+1)
    //     setInput('')
    // })
  };

  return (
    <form>
      <label>Search</label>
      <input type='text' />
      <button type='submit'>
        <BiSearchAlt2 />
      </button>
    </form>
  );
};
export default SearchBar;
