interface GnbVmData {
	isSignedIn: boolean | undefined;
	user?: {
		id: string; 
	}
	submenu: {
		visible: boolean;
	}
	signIn: {
		visible: boolean;
		success: boolean | undefined;
		loading: boolean;
	}
	
}

export class GnbVm {
	
}