import { useEffect } from "react";
import { ProductType } from "../models/products";
import { responseGetProductsType } from "../services";

export const useAsyncProducts = (
  asyncFn: (param: number) => Promise<responseGetProductsType>,
  paramAsyncFn: number,
  setProducts: (value: React.SetStateAction<ProductType[]>) => void,
  setNumberOfPages: (value: React.SetStateAction<number>) => void,
  dependencies: any[] = []
) => {
  useEffect(() => {
    let isActive = true;
    asyncFn(paramAsyncFn).then((response) => {
      if (isActive) {
        setProducts(response.products);
        setNumberOfPages(response.pages);
      }
    });
    return () => {
      isActive = false;
    };
  }, dependencies);
};
