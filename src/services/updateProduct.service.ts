import { ProductType } from "../models/products";
import axios from 'axios';
import { catchErrorsAxios } from "../utils/catchErrorsFetch";
import { inputType } from "../components/AddProductForm";

type responseFetch = ProductType & { message?: string }

export const updateProduct = async (product: ProductType) => {
    console.log(product)
    try {
        const response = await axios.put("/product", product)
            .catch((err) => catchErrorsAxios(err)
            )
        const data: responseFetch = response.data
        alert(`Producto actualizado exitosamente`)
    } catch (err) {
        console.log(err)
        alert(`Catcheando el error: ${err}`)
    }
}