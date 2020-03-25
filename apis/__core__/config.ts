import axios, { AxiosInstance } from 'axios';

const BASE = 'https://api.themoviedb.org';

const adminAxios: AxiosInstance = axios.create({
	baseURL: BASE
}) 

export const initApiConfig = (token: string | null ): void => {
	adminAxios.defaults.headers.common['Authorization'] = token ?`Bearer ${token}` : null;  
}; 

export default adminAxios; 