import axios from "axios"
import { searchDetailsType } from "../components/SearchBar"
import { ProductType } from "../models/products"
import { catchErrorsAxios } from "../utils/catchErrorsFetch"

type responseFetch = ProductType & { message?: string }

export const searchProduct = async (searchDetails: searchDetailsType) => {
    const response = await axios.get(`/product/search/info?${searchDetails.searchBy}=${searchDetails.searchValue}`)
        .catch((err) => catchErrorsAxios(err))
    const data: responseFetch = response.data;
    console.log(data)
}