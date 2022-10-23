import axios from "axios";
import { ProductType } from "../models/products";
import { catchErrorsAxios } from "../utils/catchErrorsFetch";

type responseFetch = ProductType & { message?: string }

export const deleteProduct = async (id: number) => {
    try {
        const response = await axios.delete(`/product/:${id}`)
            .catch((err) => catchErrorsAxios(err));
        const data: responseFetch = response.data;
        alert(`Producto ${data.name} creado exitosamente`)
    }
    catch (err) {
        console.log(err);
        alert(`Catcheando el error: ${err}`)
    }
}