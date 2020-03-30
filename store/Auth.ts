import ApiStore from './api.store' 
import { APIStatus, useHttpModule, usePostAuthAPI } from 'apis';
import { RootStore } from 'store'; 
import { observable, action } from 'mobx';
import { useLocalStore } from 'mobx-react';
import { postAuth } from 'apis/auth'; 
import { AuthResponse } from 'apis/__core__/types';
import { initHeader } from 'apis/__core__'; 
import { ActionStatus } from 'lib/actionStatus';
import { fdatasync } from 'fs';
import { createCipher } from 'crypto';
import { useRouter } from 'next/router';

export const requestPermission = 'https://www.themoviedb.org/auth/access?request_token=';

class AuthStore extends ApiStore {
	@observable auth?: string | null; 

	constructor(rootStore: RootStore) {
		super();
		this.rootStore = rootStore;
	}

	@action
	async updateAuth(authToken: string){ // put access token in localStorage if there is no access token.
		const accessToken = localStorage.getItem('myReact_access_token'); 
		if(accessToken) return;
		else {
			const {access_token} = await postAuth.accessToken({redirect_to:'ht'});
			localStorage.setItem('myReact_access_token', access_token);
		} 
	}
	@action
	async grantAuth(request_token: string) {
		if(this.status !== ActionStatus.Request) { 
			try {
				const { access_token } = await postAuth.accessToken(request_token);
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
				const [data] = await postAuth.requestToken();
				useRouter().push(`https://www.themoviedb.org/auth/access?request_token=${request_token}`);
			} catch ( error ) {
				this.onFailure(error); 
				return;
			}
			this.onSuccess();
		}
	}
	@action
	signOut = async( access_token: AccessTokenType ) => {
		try {
			this.onRequest(); 
			const { success } = await postAuth.deleteToken(access_token);
			if(success){
				initApiConfig(null);
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