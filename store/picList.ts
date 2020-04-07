import { RootStore }  from './index'; 
import { action, observable } from 'mobx';
import ApiStore from './api.store'; 
import { requestList } from 'apis/picList';
import { PictureList } from 'models/pictureList'; 

class PictureListStore extends ApiStore{
	@observable page: number = 1; 
	@observable limit: number = 10;
	@observable pictureList: PictureList[] = []; 
	constructor(rootStore: RootStore) {
		super();
		this.rootStore = rootStore;
	}

	@action.bound
	async fetchImages() {
		try{
			this.onRequest(); 
			const [, ListResponse ] = await requestList({page: this.page, limit: 10});  
			ListResponse ? this.pictureList = [...this.pictureList, ...ListResponse] : '';
			this.page++; 			
		}catch(error){
			this.onFailure(error);
		}
		this.onSuccess(); 
	}

}

export default PictureListStore; 