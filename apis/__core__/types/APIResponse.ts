import { APIError } from './APIError';
import { APIStatus } from './APIStatus';

export type WhenError = [APIError, undefined]; 
export type WhenSuccess<Data> = [undefined, Data];

export type APIResponse<Data> = WhenError | WhenSuccess<Data>;
