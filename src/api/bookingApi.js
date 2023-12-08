import axios from 'axios';
import {getEnvVaribles} from '../helpers/getEnvVaribles';

const {VITE_API_URL} = getEnvVaribles();

export const bookingApi = axios.create({
    baseURL: VITE_API_URL
});

bookingApi.interceptors.request.use( config => {
    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token')
    }
    return config;
})

