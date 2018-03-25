import axios from 'axios';


const axiosGamesInstance = axios.create({

    baseURL: 'https://www.giantbomb.com/api/game'
});

axiosGamesInstance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axiosGamesInstance.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
axiosGamesInstance.defaults.withCredentials = true;
axiosGamesInstance.defaults.crossDomain = true;



axiosGamesInstance.interceptors.response.use(response => {

    return response;
}, error => {

    console.log('[Error while getting data from GiantBomb Api.]');
    console.log(error);
    return Promise.reject(error);
});


axiosGamesInstance.interceptors.request.use(request => {

    return request;
}, error => {

    console.log('[Error while sending data to GiantBomb Api.]');
    console.log(error);
    return Promise.reject(error);
});

export default axiosGamesInstance;