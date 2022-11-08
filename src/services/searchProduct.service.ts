import axios from "axios"
import { searchDetailsType } from "../components/SearchBar"
import { catchErrorsAxios } from "../utils/catchErrorsFetch"

export const searchProduct = async (searchDetails: searchDetailsType) => {
    const response = await axios.get(`/product/search/info?${searchDetails.searchBy}=${searchDetails.searchValue}`)
        .catch((err) => catchErrorsAxios(err))
}