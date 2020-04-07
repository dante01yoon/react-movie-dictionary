import axios, { AxiosInstance } from 'axios';

const BASE = 'https://api.themoviedb.org';

const tmdbAxios: AxiosInstance = axios.create({
	baseURL: BASE
}) 

export const initApiConfig = (token: string | null ): void => {
	tmdbAxios.defaults.headers.common['Authorization'] = token ?`Bearer ${token}` : null;  
}; 

export default tmdbAxios; 

