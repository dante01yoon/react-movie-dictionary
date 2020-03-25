import { APIError } from './index';
import axios from 'axios';

export type RequestToken = {
	success: boolean;
	expires_at: string;
	request_token: string; 
}

export type GetAuthParams = {
	api_key : string
}
export type PostAuthParams = {
	id: string;
	password: string;
}

export type AuthResponse = {
	success: boolean,
	expires_at: string, 
	request_token: string
}

export const getAuth = (params: GetAuthParams):Promise<AuthResponse> =>
	axios.