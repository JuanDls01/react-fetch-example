import { ProductType } from "../models/products";
import axios from 'axios';
import { catchErrorsAxios } from "../utils/catchErrorsFetch";
import swal from "sweetalert";

type responseFetch = ProductType & { message?: string }

export const updateProduct = async (product: ProductType) => {
    try {
        const response = await axios.put("/product", product)
            .catch((err) => catchErrorsAxios(err)
            )
        const data: responseFetch = response.data
        swal("Good job!", `Producto ${data.name} actualizado exitosamente`, "success")
        // alert(`Producto ${data.name} actualizado exitosamente`)
    } catch (err) {
        swal('Ups', `${err}`, 'error')
        // alert(`Catcheando el error: ${err}`)
    }
}