import React, { createContext, FC, useContext } from 'react';
import { useLocalStore } from 'mobx-react-lite';
import AuthStore from './Auth';
import ApiStore from './api.store' 

export type RootStore = {
	auth: AuthStore,
	pucList: PicListStore
}

export type StoreKeys = keyof RootStore; 

const storeContext = createContext<RootStore | null>(null);

const initRootStore = (): RootStore => {
	const rootStore: RootStore = {} as RootStore;
	rootStore.auth = new AuthStore(rootStore);
	
	return rootStore;
}

export const StoreProvider: FC = ({ children }) => {
	const store = useLocalStore(initRootStore);
	
	if(process.env.NODE_ENV === 'development'){
		//
	}
	return <storeContext.Provider value={store}>{children}</storeContext.Provider>
}

export function useStore<K extends StoreKeys>(storeName: K): RootStore[K]{
	const store = useContext(storeContext); 
	if(!store) throw new Error('useStore must be used within a storeProvider'); 
	
	return store[storeName]; 
}