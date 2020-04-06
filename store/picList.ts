import { observer, useLocalStore } from 'mobx-react-lite';
import { RootStore }  from './index'; 
import ApiStore from './api.store'; 
import { action } from 'mobx';
import { APIResponse } from 'apis/__core__';

type picListResponse = APIResponse<PicList>

export class PictureList extends ApiStore{
	constructor(rootstore: RootStore) {
		super();
	}

	@action
	async fetchImages() {
		
	}
}