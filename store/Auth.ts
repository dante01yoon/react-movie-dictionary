import ApiStore from './api.store' 
import { RootStore } from 'store'; 
import { observable, action } from 'mobx';
import { postAuth } from 'apis/auth'; 
import { Token, http } from 'apis/__core__';
import { ActionStatus } from 'lib/actionStatus';
import { useRouter } from 'next/router';

export const requestPermission = 'https://www.themoviedb.org/auth/access?request_token=';

class AuthStore extends ApiStore {
	@observable auth?: string | null; 

	constructor(rootStore: RootStore) {
		super();
		this.rootStore = rootStore;
	}

	@action
	async updateAuth(request_token: string){ // put access token in localStorage if there is no access token.
		const accessToken = localStorage.getItem('myReact_access_token'); 
		if(accessToken) return;
		else {
			const [,data] = await postAuth.accessToken(request_token);
			
		} 
	}
	@action
	async grantAuth(request_token: string) {
		if(this.status !== ActionStatus.Request) { 
			try {
				const [,data] = await postAuth.accessToken(request_token);
				localStorage.setItem('TMDB_USER_TOKEN', `${data?.access_token}`);
			}catch(error) {
				this.status = ActionStatus.Failure;
				this.onFailure(error);
				return;  
			}
		}		
	}
	@action
	signIn = async () => {
		if(this.status !== ActionStatus.Request) {
			this.onRequest();
			try {
				const [, data] = await postAuth.requestToken();
				useRouter().push(`https://www.themoviedb.org/auth/access?request_token=${data?.access_token}`);
			} catch ( error ) {
				this.onFailure(error); 
				return;
			}
			this.onSuccess();
		}
	}
	@action
	signOut = async( access_token: Token ) => {
		try {
			this.onRequest(); 
			
			const [, data] = await postAuth.deleteToken(access_token);
			if(data){
				http.resetToken();
				this.auth = null; 
			} 
		}	catch (error) {
				this.status = ActionStatus.Failure;
				this.onFailure(error);
				return; 
			}
		this.onSuccess(); 
	}
}	

export default AuthStore; 