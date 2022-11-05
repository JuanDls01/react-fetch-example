import { ProductType } from "../models/products";
import axios from 'axios';

type response = {
    products: ProductType[],
    pages: number
}

export const getProducts = async (currentPage: number) => {
    const json = await axios.get(`/product/${currentPage}`)
    const response: response = json.data
    console.log(`/product/:${currentPage}`, response)
    return response
}