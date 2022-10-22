import { ProductType } from "../models/products";
import axios from 'axios';

export const createProduct = async (product: ProductType) => {
    console.log('createProduct:', product)
    // const json = await axios.post("/product")
    // const products: ProductType[] = json.data
    // return products;
}