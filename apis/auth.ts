import { http } from './__core__/useHttpModule'; 
import { 
	Token,
	AuthResponse,
	APIResponse
} from './__core__/types';




const BASE = 'https://api.themoviedb.org';
const GET_REQUEST_TOKEN_V3 = '/3/authentication/token/new?api_key='
const GET_REQUEST_TOKEN_V4 = '/4/auth/request_token';
const GET_ACCESS_TOKEN_V4 = '/4/auth/access_token';
type requestTokenBody =  {
	redirect_to: string; 
}

export const requestToken = ( params: requestTokenBody = {redirect_to: 'http://naver.com'}): Promise<APIResponse<AuthResponse>> => {	
	http.initHeader(process.env.ACCESS_TOKEN); 
	return http.GET<AuthResponse>(GET_REQUEST_TOKEN_V4, params); 
}
export const accessToken = (params: Token ): Promise<APIResponse<AuthResponse>> => 
	http.POST<AuthResponse>(GET_ACCESS_TOKEN_V4, { params }); 
export const deleteToken = (params: Token ): Promise<APIResponse<AuthResponse>> => 
	http.DELETE<AuthResponse>(GET_ACCESS_TOKEN_V4, {params}); 
export const postAuth = {
	requestToken,
	accessToken,
	deleteToken
}; 

