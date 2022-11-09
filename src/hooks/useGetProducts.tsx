import { useEffect } from "react";
import swal from "sweetalert";
import { paginateType, ProductType, searchDetailsType } from "../models";
import { responseGetProductsType } from "../services";

export const useGetProducts = (
  getProducts: (
    currentPage: number,
    prodPerPage: number,
    searchDetails: searchDetailsType
  ) => Promise<responseGetProductsType>,
  paginate: paginateType,
  setProducts: (value: React.SetStateAction<ProductType[]>) => void,
  setPaginate: React.Dispatch<React.SetStateAction<paginateType>>,
  dependencies: any[] = []
) => {
  useEffect(() => {
    let isActive = true;
    getProducts(
      paginate.currentPage,
      paginate.prodPerPage,
      paginate.searchDetails
    )
      .then((response) => {
        if (isActive) {
          setProducts(response.products);
          setPaginate((prev) => ({ ...prev, pages: response.pages }));
        }
      })
      .catch((err) => swal("Ups", `${err}`, "error"));
    return () => {
      isActive = false;
    };
  }, dependencies);
};
