import { ProductType } from "../models/products";
import axios from 'axios';
import { catchErrorsAxios } from "../utils/catchErrorsFetch";
import { inputType } from "../components/AddProductForm";
import swal from "sweetalert";

type responseFetch = ProductType & { message?: string }

export const createProduct = async (product: inputType) => {
    try {
        const response = await axios.post("/product", product)
            .catch((err) => catchErrorsAxios(err)
            )
        const data: responseFetch = response.data;
        swal("Good job!", `Producto ${data.name} creado exitosamente`, "success")
        // alert(`Producto ${data.name} creado exitosamente`)
    } catch (err) {
        return err
        swal('Ups', `${err}`, 'error')
        // alert(`Catcheando el error: ${err}`)
    }
}