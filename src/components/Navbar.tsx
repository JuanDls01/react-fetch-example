import { useState } from "react";
import { NavLink } from "react-router-dom";
import { themes, useThemeContext } from "../Context/ThemeContext";
import SearchBar from "./SearchBar";
import ThemeTogglerBttn from "./ThemeTogglerBttn";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { theme } = useThemeContext();
  return (
    <nav className='w-full py-3 px-5 flex items-center justify-between border-b border-gray-800'>
      <h1
        className={`${
          theme === themes.dark ? "text-white" : "text-black"
        } text-xl font-bold`}
      >
        Products App
      </h1>
      <ul className='w-3/6 flex items-center justify-between'>
        <li>
          <NavLink
            to='/home'
            className={({ isActive }) => (isActive ? `text-indigo-400` : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/create-product'
            className={({ isActive }) => (isActive ? `text-indigo-400` : "")}
          >
            Create Product
          </NavLink>
        </li>
        <li>
          <SearchBar />
        </li>
        <li>
          <ThemeTogglerBttn />
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
