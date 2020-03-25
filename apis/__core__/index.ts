import axios, { AxiosInstance } from 'axios';

const TMDB_ROUTE = 'https://api.themoviedb.org';
const GET_REQUEST_TOKEN = '/3/authentication/token/new?api_key='
const adminAxios: AxiosInstance = axios.create({
	baseURL: TMDB_ROUTE + GET_REQUEST_TOKEN
});

export const initApiConfig = (token: string | null): void => {

}