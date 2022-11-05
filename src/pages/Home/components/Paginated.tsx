import { useState } from "react";
import { useReloadContext } from "../../../Context/ReloadContext";
import { ProductType } from "../../../models/products";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

type props = {
  numberOfPages: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

const Paginated: React.FC<props> = ({ numberOfPages, setCurrentPage }) => {
  const { setReload } = useReloadContext();

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
    <div>
      <button onClick={(e) => handleCurrentPage(e, "prev")}>
        <GrFormPrevious />
      </button>
      {pages.map((page) => (
        <button onClick={(e) => handleCurrentPage(e, "", page)}>{page}</button>
      ))}
      <button onClick={(e) => handleCurrentPage(e, "next")}>
        <GrFormNext />
      </button>
    </div>
  );
};
export default Paginated;
