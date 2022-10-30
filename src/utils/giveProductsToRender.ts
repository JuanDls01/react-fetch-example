import { ProductType } from "../models/products";

export const giveProductsToRender = (
    productsPerPage: number,
    products: ProductType[],
    currentPage: number,
) => {
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const productsToRender = products.slice(indexOfFirstProduct, indexOfLastProduct);
    return productsToRender;
};