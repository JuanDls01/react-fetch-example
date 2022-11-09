import axios from "axios"
import { searchDetailsType } from "../models"
import { ProductType } from "../models/products"
import { catchErrorsAxios } from "../utils/catchErrorsFetch"

export const searchProduct = async (searchDetails: searchDetailsType) => {
    const response = await axios.get(`/product/search/info?${searchDetails.searchBy}=${searchDetails.searchValue}`)
        .catch((err) => catchErrorsAxios(err))
    const data: ProductType[] = response.data;
    return data
}