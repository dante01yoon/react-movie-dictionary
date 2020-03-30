import { APIError } from './index';
import axios from 'axios';

export type Token = string; 
export type AuthResponse = APIError & {
	access_token?: Token
};

export type RequestTokenBody =  {
	redirect_to: string 
}

export type ConvertAccessTokenResponse = {
	success: boolean;
	session_id: string; 
}

export type GetAuthParams = {
	api_key : string
}
