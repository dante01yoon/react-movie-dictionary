import ApiStore from './api.store' 
import { APIStatus, useHttpModule, usePostAuthAPI } from 'apis';
import { RootStore } from 'store'; 
import { observable, action } from 'mobx';
import { useLocalStore } from 'mobx-react';
import { useEffect } from 'react';
import { postAuth } from 'apis/auth'; 
import { PostAuthParams, PostAuthResponse } from 'apis/__core__/types/auth';
import { ActionStatus } from 'lib/actionStatus';

class AuthStore extends ApiStore {
	@observable auth?: string | null; 

	constructor(rootStore: RootStore) {
		super();
		this.rootStore = rootStore; 
	}

	@action
	updateAuth(authToken: string):void {
		const parsedToken = ''; 
	}
	@action
	signIn = async(params: PostAuthParams): PostAuthResponse =>{
		if(this.status !== ActionStatus.Request) {
			this.onRequest();

			try {
				const { request_token } = await 
			} 
		}
	}
} 


export default AuthStore; 