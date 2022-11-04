import { BsMoonStars, BsSun } from "react-icons/bs";
import { useReloadContext } from "../Context/ReloadContext";
import { themes, useThemeContext } from "../Context/ThemeContext";

const ThemeTogglerBttn: React.FC = () => {
  const { theme, setTheme } = useThemeContext();
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    theme === themes.dark
      ? localStorage.setItem("theme", themes.light)
      : localStorage.setItem("theme", themes.dark);
    const storageTheme: string | null = localStorage.getItem("theme");
    setTheme(storageTheme);
  };
  return (
    <button
      onClick={handleClick}
      className={`h-10 w-10 flex items-center justify-center rounded-full ${
        theme === themes.light ? "hover:bg-gray-200" : "hover:bg-gray-800"
      }`}
    >
      {theme === themes.dark ? (
        <BsMoonStars className='h-6 w-6' />
      ) : (
        <BsSun className='h-6 w-6' />
      )}
    </button>
  );
};
export default ThemeTogglerBttn;
