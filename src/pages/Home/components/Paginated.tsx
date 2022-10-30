import { useState } from "react";
import { ProductType } from "../../../models/products";

type props = {
  productList: ProductType[];
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};
const Paginated: React.FC<props> = ({ productList, setCurrentPage }) => {
  const pages: number[] = [];
  for (let i = 0; i<=Math.ceil(productList.length / 4); i++){
    
  }
  console.log(Array(Math.ceil(productList.length / 4)));
  // .forEach((x, index) => {
  //   console.log("index", index);
  //   pages.push(index);
  //   // return index;
  // });
  console.log("pages", pages);
  return <div>Paginated</div>;
};
export default Paginated;
