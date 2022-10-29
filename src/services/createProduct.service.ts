import { ProductType } from "../models/products";
import axios from 'axios';
import { catchErrorsAxios } from "../utils/catchErrorsFetch";
import { inputType } from "../components/AddProductForm";
import swal from "sweetalert";

type responseFetch = ProductType & { message?: string }

export const createProduct = async (product: inputType) => {
    const response = await axios.post("/product", product)
        .catch((err) => catchErrorsAxios(err)
        )
    const data: responseFetch = response.data;
    swal("Good job!", `Producto ${data.name} creado exitosamente`, "success")
}