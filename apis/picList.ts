import { http } from './__core__/useHttpModule'; 
import { 
	APIResponse
} from './__core__/types';

export type RequestList = {
	
}

const BASE = 'https://picsum.photos';
const GET_REQUEST_LIST = '/v2/list';

export const requestList = ( params: