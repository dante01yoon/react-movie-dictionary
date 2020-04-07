export type StatusCode = number;
export type APIError = {
	status_code: StatusCode; 
	status_message: string;
	error_message?: string;
	success?: boolean
};

export interface ErrorDescription{
	7 : string;
}

export const ErrorMessage : ErrorDescription = {
	7: "request_token is not validated" 
};
