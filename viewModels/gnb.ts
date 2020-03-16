import React, { BaseSyntheticEvent, MouseEvent } from 'react'; 
export type MMTErrorCodes = 
	| 'STATUS_400'
	| 'STATUS_401'
	| 'STATUS_403'
	| 'STATUS_404'
	| 'STATUS_500'
	| 'STATUS_503'
	| 'STATUS_429'
	| 'STATUS_497'
	| 'ERR_REQUIRED'
	| 'ERR_INVALID_EMAIL'
	| 'ERR_INVALID_PHONE'
	| 'ERR_INVALID_DATE'
	| 'ERR_INVALID_PROBLEM'
	| 'ERR_NOT_IMAGE'
	| 'ERR_LIMIT_IMAGE_SIZE'

export type Auth = {
	signIn: {
		visible: boolean;
		success: boolean | undefined;
		loading: boolean;
	}
}

export class Gnbvm {
	static getByStore(): Gnbvm {
		return new GnbVm(store);
	}
}
