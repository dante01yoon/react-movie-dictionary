import { RootStore } from 'store';
import { observable, action, computed } from 'mobx';
import ApiStore from './api.store'; 
import { ActionStatus } from 'lib/actionStatus';
import { observer } from 'mobx-react-lite';

export interface GnbVm {
	user?: string | null; 
	isSignedIn : boolean | undefined ; 
	isSigningIn: boolean | undefined; 
	isDarkMode: boolean;
	isSigningOut: boolean | undefined;
}
class GnbStore extends ApiStore {
	@observable gnbVm?: GnbVm 
	constructor(rootStore:RootStore){
		super();
		this.rootStore = rootStore 
	}

	@action.bound
	init(){
		this.gnbVm = {
			user: '',
			isSignedIn: false, 
			isSigningIn: false, 
			isDarkMode: false, 
			isSigningOut: false 
		}
	}

	@computed get data(): GnbVm {
		this.gnbVm =  {
			user: this.rootStore?.auth.auth,
			isSignedIn: !!this.rootStore?.auth.auth,
			isSigningIn: this.rootStore?.auth.signIn && this.rootStore?.auth.status === ActionStatus.Success,
			isDarkMode: true,
			isSigningOut: this.rootStore?.auth.signOut && this.rootStore?.auth.status === ActionStatus.Success
		}
		return this.gnbVm;  
	} 
}

export default GnbStore; 