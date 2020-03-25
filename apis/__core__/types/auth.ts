import { APIError } from './index';
import axios from 'axios';

export type RequestTokenResponse = {
	status_message: string;
	request_token: string; 
	success: boolean;
	status_code: number
}

export type RequestTokenBody =  {
	redirect_to: string 
}

export type AccessTokenResponse = {
	success: boolean;
	access_token: string;
	status_code: number; 
	status_message: string;
	account_id: string; 
}
export type RequestTokenType = Pick<RequestTokenResponse, 'request_token'>;
export type AccessTokenType = Pick<AccessTokenResponse, 'access_token'>;

export type DeleteTokenResponse = {
	status_message: string;
	success: boolean;
	status_code: number; 
}

export type ConvertAccessTokenResponse = {
	success: boolean;
	session_id: string; 
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
	axios.get('/')