import { observable, action } from 'mobx';

class RootStore { 
	@observable authToken: string = '';
	
}