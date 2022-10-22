import { ProductType } from "../models/products";
import axios from 'axios';

export const getPorducts = async () => {
    const json = await axios.get("/product")
    const products: ProductType[] = json.data
    return products
}