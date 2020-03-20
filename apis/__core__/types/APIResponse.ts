import { APIError } from './APIError';
import { APIStatus } from './APIStatus';

export type APIResponse<Data extends object> = 
	| {
			status: APIStatus.IDLE | APIStatus.LOADING;
			data?: Data;
			error?: APIError;
		}
	| {
			status: APIStatus.SUCCESS;
			data: Data;
			error?: APIError;
		}
	| {
			status: APIStatus.SERVER_ERROR | APIStatus.CLIENT_ERROR;
			data?: Data;
			error: APIError; 
		}
	| {
			status: APIStatus.UNKNOWN_ERROR;
			data?: Data;
			error: { message: string };
		};
		