import axios from "axios";

export const dishesApi = axios.create({
    baseURL: 'http://localhost:3000/api/dishes',
    headers: {}
})
