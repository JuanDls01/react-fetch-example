import { usePageContext } from "../../../Context/PageContext";

const Paginated: React.FC = () => {
  const { paginate, setPaginate } = usePageContext();
  // const pages: number[] = [];
  // for (let i = 1; i <= numberOfPages; i++) {
  //   pages.push(i);
  // }

  const handleCurrentPage = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    action: string,
    page: number = 1
  ) => {
    if (action === "prev")
      setPaginate((prev) => ({ ...prev, currentPage: prev.currentPage - 1 }));
    else if (action === "next")
      setPaginate((prev) => ({ ...prev, currentPage: prev.currentPage + 1 }));
    else setPaginate((prev) => ({ ...prev, currentPage: page }));
  };

  return (
    <div className='h-12 flex justify-center'>
      <button
        onClick={(e) => handleCurrentPage(e, "prev")}
        className={`my-1 mx-2 font-bold flex items-center justify-center ${
          paginate.currentPage === 1 ? "text-gray-500" : ""
        }`}
        disabled={paginate.currentPage === 1 ? true : false}
      >
        Prev
      </button>
      {paginate.pages.map((page, index) => (
        <button
          key={index}
          onClick={(e) => handleCurrentPage(e, "", page)}
          className={`h-10 w-10 my-1 mx-2 font-bold flex items-center justify-center rounded transition-colors delay-200 border-indigo-500 ${
            page === paginate.currentPage
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
          paginate.currentPage === paginate.pages.length ? "text-gray-500" : ""
        }`}
        disabled={paginate.currentPage === paginate.pages.length ? true : false}
      >
        Next
      </button>
    </div>
  );
};
export default Paginated;
