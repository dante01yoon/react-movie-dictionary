import ApiStore from './api.store' 
import { APIStatus, useHttpModule, usePostAuthAPI } from 'apis';
import { useLocalStore } from 'mobx-react';
import { useEffect } from 'react';

class AuthStore extends ApiStore {
	@observable auth?: string | null; 
	
}