import { createContext, useState, useContext } from "react";

type pageContextType = {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  numberOfPages: number;
  setNumberOfPages: React.Dispatch<React.SetStateAction<number>>;
};

export const PageContext = createContext<pageContextType | undefined>(
  undefined
);

type props = { children: React.ReactNode };

const PageProvider: React.FC<props> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(1);

  return (
    <PageContext.Provider
      value={{ currentPage, setCurrentPage, numberOfPages, setNumberOfPages }}
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
