import axios from 'axios';


const axiosFirebaseInstance = axios.create({

    baseURL: 'https://the-collections-project.firebaseio.com'
});

axiosFirebaseInstance.interceptors.response.use(response => {

    return response;
},error => {

    console.log('[Error while getting data from firebase.]');
    console.log(error);
    return Promise.reject(error);
});


axiosFirebaseInstance.interceptors.request.use(request => {

    return request;
},error => {

    console.log('[Error while sending data to firebase.]');
    console.log(error);
    return Promise.reject(error) ;
});

export default axiosFirebaseInstance;