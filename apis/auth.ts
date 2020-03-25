import axios from './__core__/config'; 
import { 
	RequestTokenBody, 
	RequestTokenType,
	RequestTokenResponse,
	AccessTokenResponse,
	AccessTokenType
} from './__core__/types';

export const requestToken = ( params: RequestTokenBody): Promise<RequestTokenResponse> => 
	axios.post('/4/auth/request_token', params); 

export const accessToken = (params: RequestTokenType ): Promise<AccessTokenResponse> => 
	axios.post('/4/auth/access_token'); 

export const deleteToken = (params: AccessTokenType): Promise<AccessTokenResponse> => 
	axios.delete('/4/auth/access_token');

export const postAuth = {
	requestToken,
	accessToken,
	deleteToken
}; 

