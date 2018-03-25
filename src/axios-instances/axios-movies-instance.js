import axios from 'axios';


const axiosMoviesInstance = axios.create({

    baseURL: 'https://www.omdbapi.com'
});

axiosMoviesInstance.interceptors.response.use(response => {

    return response;
}, error => {

    console.log('[Error while getting data from OMDb Api.]');
    console.log(error);
    return Promise.reject(error);
});


axiosMoviesInstance.interceptors.request.use(request => {

    return request;
}, error => {

    console.log('[Error while sending data to OMDb Api.]');
    console.log(error);
    return Promise.reject(error);
});

export default axiosMoviesInstance;