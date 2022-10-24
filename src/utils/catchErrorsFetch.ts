export const catchErrorsAxios = (err: any) => {
    if (err.response) {
        console.log(`Surgio un error: ${err.response.data?.message}`)
        throw new Error(err.response.data.message)
    } else if (err.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(err.request);
        throw new Error(err.request)
    } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', err.message);
        throw new Error(err.message)
    }
}