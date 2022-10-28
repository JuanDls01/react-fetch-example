import axios from "axios";
import { ProductType } from "../models/products";
import { catchErrorsAxios } from "../utils/catchErrorsFetch";
import swal from "sweetalert";

type responseFetch = ProductType & { message?: string }

export const deleteProduct = async (id: number) => {
    try {
        const response = await axios.delete(`/product/:${id}`)
            .catch((err) => catchErrorsAxios(err));
        const data: responseFetch = response.data;
        swal("Good job!", `Producto ${data.name} eliminado exitosamente`, "success")
    }
    catch (err) {
        console.log(err);
        swal('Ups', `${err}`, 'error')
        // alert(`Catcheando el error: ${err}`)
    }
}