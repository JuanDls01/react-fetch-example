import { createContext, useState, useContext } from "react";
import { paginateType } from "../models";

type pageContextType = {
  paginate: paginateType;
  setPaginate: React.Dispatch<React.SetStateAction<paginateType>>;
  // currentPage: number;
  // setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  // prodPerPage: number;
  // setProdPerPage: React.Dispatch<React.SetStateAction<number>>;
  // pages: number[];
  // setPages: React.Dispatch<React.SetStateAction<number[]>>;
};

export const PageContext = createContext<pageContextType | undefined>(
  undefined
);

type props = { children: React.ReactNode };

const PageProvider: React.FC<props> = ({ children }) => {
  // const [currentPage, setCurrentPage] = useState(1);
  // const [pages, setPages] = useState([1]);
  // const [prodPerPage, setProdPerPage] = useState(5);
  const [paginate, setPaginate] = useState({
    currentPage: 1,
    prodPerPage: 5,
    pages: [1],
    searchDetails: {
      searchValue: "",
      searchBy: "name",
    },
  });

  return (
    <PageContext.Provider
      value={{
        // currentPage,
        // setCurrentPage,
        // pages,
        // setPages,
        // prodPerPage,
        // setProdPerPage,
        paginate,
        setPaginate,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};
export default PageProvider;

export const usePageContext = () => {
  const context = useContext(PageContext);
  if (context === undefined)
    throw new Error("PageContext must be used within a PageContextProvider");
  return context;
};
