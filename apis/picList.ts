import { http } from './__core__/useHttpModule'; 
import { 
	APIResponse,
	ListResponse
} from './__core__/types';

const BASE = 'https://picsum.photos';
const GET_REQUEST_LIST = '/v2/list?';

export type RequestListParams = {
	page: number; 
	limit: number; 
}
export const requestList = ( params: RequestListParams): Promise<APIResponse<ListResponse>>  => {
	const { page, limit } = params;

	return http.GET<ListResponse>(`${BASE}${GET_REQUEST_LIST}page=${page}&limit=${limit}`);
}  