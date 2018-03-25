import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.interceptors.response.use(response => {


    return response;
}, error => {

    console.log('[Global Error While Processing Response]');
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.request.use(request => {


    return request;
},error => {

    console.log('[Global Error While Processing Request]');
    console.log(error);
    return Promise.reject(error);
});



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
