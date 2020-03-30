import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'; 
import { APIResponse } from 'apis/__core__/types'; 
const baseURL = 'https://api.themoviedb.org';

const tmdbAxios: AxiosInstance = axios.create({
	baseURL
});

export const initHeader  = (token: string | undefined)  => {
	tmdbAxios.defaults.headers.common['Authorization'] = token ?? '';
};

const request = async <T>(config: AxiosRequestConfig): Promise<APIResponse<T>> => {
	try {
		const { data } = await tmdbAxios.request(config);
		return [undefined, data];
	} catch(error) {
		return [error, undefined]; 
	}
};

const resetToken = ():void => {
	delete tmdbAxios.defaults.headers.common['Authorization']; 
}

const hasToken = ():boolean => !! tmdbAxios.defaults.headers.common['Authorization'];

const GET = <T>(url: string, params?: object, config?: AxiosRequestConfig): Promise<APIResponse<T>> => 
	request({...config, method: 'GET', url, params});

const POST = <T>(url: string, params?: object, config?: AxiosRequestConfig): Promise<APIResponse<T>> => 
	request({...config, method: 'POST', url, params});

const DELETE = <T>(url: string, params?: object, config?: AxiosRequestConfig): Promise<APIResponse<T>> => 
	request({...config, method: 'DELETE', url, params});

export const http = { initHeader, hasToken, resetToken, GET, POST, DELETE } ; 