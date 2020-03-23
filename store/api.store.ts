import { ActionStatus} from 'lib/actionStatus';
import { action, observable } from 'mobx';
import { RootStore } from './index';
import { registerInterceptor } from 'mobx/lib/internal';

class ApiStore {
	@observable status: ActionStatus = ActionStatus.Initial;
	@observable error?: string;
	rootStore?: RootStore;
	
	@action.bound
	onRequest(): void {
		this.status = ActionStatus.Request;
		this.error = undefined;
	}

	@action.bound
	onSuccess(): void {
		this.status = ActionStatus.Success;
		this.error = undefined;
	}

	@action.bound
	onFailure(error?: string): void {
		this.status = ActionStatus.Failure;

		if(error) {
			this.error = error; 
		}
	}
}

export default ApiStore;