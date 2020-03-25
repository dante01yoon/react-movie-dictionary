import axios, { AxiosInstance } from 'axios';

const TMDB_ROUTE = 'https://api.themoviedb.org';
const GET_REQUEST_TOKEN_V3 = '/3/authentication/token/new?api_key='
const GET_REQUEST_TOKEN_V4 = '/4/auth/request_token';
const adminAxios: AxiosInstance = axios.create({
	baseURL: TMDB_ROUTE + GET_REQUEST_TOKEN_V3
});

const adminAxiosV4: AxiosInstance = axios.create({
	baseURL: TMDB_ROUTE + GET_REQUEST_TOKEN_V4
});

export const initApiConfig = (token: string | null): void => {
	adminAxiosV4.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : null; 
}; 

