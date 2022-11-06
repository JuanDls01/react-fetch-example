import { useReloadContext } from "../../../Context/ReloadContext";
import { themes, useThemeContext } from "../../../Context/ThemeContext";

type props = {
  numberOfPages: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
};

const Paginated: React.FC<props> = ({
  numberOfPages,
  setCurrentPage,
  currentPage,
}) => {
  const { setReload } = useReloadContext();
  const { theme } = useThemeContext();

  const pages: number[] = [];
  for (let i = 1; i <= numberOfPages; i++) {
    pages.push(i);
  }

  const handleCurrentPage = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    action: string,
    page: number = 1
  ) => {
    if (action === "prev") setCurrentPage((prev) => prev - 1);
    else if (action === "next") setCurrentPage((prev) => prev + 1);
    else setCurrentPage(page);
    setReload((prev) => prev + 1);
  };

  return (
    <div className='h-12 flex justify-center'>
      <button
        onClick={(e) => handleCurrentPage(e, "prev")}
        className={`my-1 mx-2 font-bold flex items-center justify-center ${
          currentPage === 1 ? "text-gray-500" : ""
        }`}
        disabled={currentPage === 1 ? true : false}
      >
        Prev
      </button>
      {pages.map((page) => (
        <button
          onClick={(e) => handleCurrentPage(e, "", page)}
          className={`h-10 w-10 my-1 mx-2 font-bold flex items-center justify-center rounded transition-colors delay-200 border-indigo-500 ${
            page === currentPage
              ? "bg-indigo-500 text-white"
              : "border-2 text-indigo-500"
          }`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={(e) => handleCurrentPage(e, "next")}
        className={`my-1 mx-2 font-bold flex items-center justify-center ${
          currentPage === numberOfPages ? "text-gray-500" : ""
        }`}
        disabled={currentPage === numberOfPages ? true : false}
      >
        Next
      </button>
    </div>
  );
};
export default Paginated;
