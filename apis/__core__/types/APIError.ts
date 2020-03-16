export type APIError = {
	description: string | { [errorField: string]: string };// invalid parameters. 
	error_code: {
		name: string;  
		value: number;
	};
	message: string;
}