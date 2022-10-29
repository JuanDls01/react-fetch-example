import { themes, useThemeContext } from "../Context";
import ThemeTogglerBttn from "./ThemeTogglerBttn";

const Navbar = () => {
  const { theme } = useThemeContext();
  return (
    <div className='w-full py-3 px-5 flex items-center justify-between border-b border-gray-800'>
      <h1
        className={`${
          theme === themes.dark ? "text-white" : "text-black"
        } text-xl font-bold`}
      >
        Products App
      </h1>
      <ThemeTogglerBttn />
    </div>
  );
};
export default Navbar;
