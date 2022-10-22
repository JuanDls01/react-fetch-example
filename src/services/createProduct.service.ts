import { ProductType } from "../models/products";
import axios from 'axios';
import { catchErrorsAxios } from "../utils/catchErrorsFetch";

type responseFetch = ProductType & { message?: string }

export const createProduct = async (product: ProductType) => {
    try {
        const response = await axios.post("http://localhost:3001/product", product)
            .catch((err) => catchErrorsAxios(err)
            )
        const data: responseFetch = response.data
        alert(`Producto ${data.name} creado exitosamente`)
    } catch (err) {
        console.log(err)
        alert(`Catcheando el error: ${err}`)
    }


}