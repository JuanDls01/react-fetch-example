import axios from 'axios';
import { ProductType, searchDetailsType } from '../models';
import { catchErrorsAxios } from '../utils/catchErrorsFetch';

export type responseGetProductsType = {
    products: ProductType[],
    pages: number[],
    totalProducts: number
}

export const getProducts = async (currentPage: number, prodPerPage: number, searchDetails: searchDetailsType) => {
    const json = await axios
        .get(`/product/${prodPerPage}/${currentPage}${searchDetails.searchValue ? `?${searchDetails.searchBy}=${searchDetails.searchValue}` : ''}`)
        .catch((err) => catchErrorsAxios(err));
    const response: responseGetProductsType = json.data
    console.log(`/product/:${currentPage}`, response)
    return response
}