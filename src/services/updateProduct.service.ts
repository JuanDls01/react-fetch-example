import { ProductType } from "../models/products";
import axios from 'axios';
import { catchErrorsAxios } from "../utils/catchErrorsFetch";

type responseFetch = ProductType & { message?: string }

export const updateProduct = async (product: ProductType) => {
    try {
        const response = await axios.put("/product", product)
            .catch((err) => catchErrorsAxios(err)
            )
        const data: responseFetch = response.data
        alert(`Producto ${data.name} actualizado exitosamente`)
    } catch (err) {
        alert(`Catcheando el error: ${err}`)
    }
}