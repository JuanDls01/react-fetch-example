import { ProductType } from "../models/products";
import axios from 'axios';

export type responseGetProductsType = {
    products: ProductType[],
    pages: number
}

export const getProducts = async (currentPage: number) => {
    const json = await axios.get(`/product/${currentPage}`)
    const response: responseGetProductsType = json.data
    console.log(`/product/:${currentPage}`, response)
    return response
}