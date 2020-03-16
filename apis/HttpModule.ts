import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { APIResponse } from './__core__/types/APIResponse';
import { TimeUnit } from 'constants/TimeUnits';
import { MMT_TOKEN, MMT_TOKEN_EXPIRED_TIME } from 'constants/LocalStorageKey';
const base = "https://api.themoviedb.org/3";

const initAxios = (): AxiosInstance =>{
	const expiredTime = localStorage.getItem(MMT_TOKEN_EXPIRED_TIME) || undefined;
	const token = expiredTime && +expiredTime > Date.now() ? localStorage.item(MMT_TOKEN) || undefined : '';
	const headers = token !== '' ? {common: {Authorization: `Bearer ${token}`} } : localStorage.clear(); 
	return axios.create({baseURL: base, headers});
}

const instance = initAxios();
const request = async <T>(config: AxiosRequestConfig): Promise<APIResponse<T>> => {
	try{
		const { data } = await instance.request(config);
		return [undefined, data];
	} catch (error) {
		return [error, undefined];
	}
}

const initToken = (token: string): void =>{
	instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
	const expiredTime = Date.now() + TimeUnit.DAY;
	localStorage.setItem(MMT_TOKEN_EXPIRED_TIME, `${expiredTime}`);
	localStorage.setItem(MMT_TOKEN, token);
};
const resetToken = (): void => {
	delete instance.defaults.headers.common['Authorization'];
}
const hasToken = ():boolean => !!instance.defaults.headers.common['Authorization'];

const GET = <T>(url:string, params?: object, config?: AxiosRequestConfig): Promise<APIResponse<T>> =>
	request<T>({...config, method: 'GET', url, params});
const DELETE = <T>(url: string, params?: object, config?: AxiosRequestConfig): Promise<APIResponse<T>> => 
	request<T>({ ...config, method: 'DELETE', url, params});
const PUT = <T>(url:string, params?: object, config?: AxiosRequestConfig): Promise<APIResponse<T>> => 
	request<T>({...config, method: 'PUT', url, params});
const POST = <T>(url:string, params?: object, config?: AxiosRequestConfig): Promise<APIResponse<T>> =>
	request<T>({ ...config, method: 'POST', url, params});
const PATCH = <T>(url:string, params?: object, config?: AxiosRequestConfig): Promise<APIResponse<T>> => 
	request<T>({ ...config, method: 'PATCH', url, params});

export const http ={ GET, DELETE, POST, PUT, PATCH, initToken, resetToken, hasToken };