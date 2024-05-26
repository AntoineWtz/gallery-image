import axios from 'axios';

const API_URL = 'https://api.unsplash.com';
const ACCESS_KEY = 'xcZDXcaSCIbklp9IQPvXwfoK-TIRm1IBRNfis-IlxEA';

export const unsplashAPI = axios.create({
    baseURL: API_URL,
    headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`
    }
});
