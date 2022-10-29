import { ProductType } from "../models/products";
import axios from 'axios';
import { catchErrorsAxios } from "../utils/catchErrorsFetch";
import swal from "sweetalert";

type responseFetch = ProductType & { message?: string }

export const updateProduct = async (product: ProductType) => {
    const response = await axios.put("/product", product)
        .catch((err) => catchErrorsAxios(err)
        )
    const data: responseFetch = response.data
    swal("Good job!", `Producto ${data.name} actualizado exitosamente`, "success")
}