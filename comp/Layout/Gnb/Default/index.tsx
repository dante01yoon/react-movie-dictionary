import React, { FC, useEffect } from 'react';
import GnbLogin from '../Login'; 
import { GnbVm } from 'store/Gnb';
import { useStore} from 'store';
const DefaultLayout: FC<{
	GnbVm : GnbVm
}> = ({
	GnbVm
}) => {
	const { 
		isSignedIn, 
		isSigningIn,
		isSigningOut
		
	} = GnbVm; 
	return (
		<div>
			{
				isSignedIn 
				?
			<div>Hi there?</div>
			  : 
			<GnbLogin GnbVm={GnbVm}/>
			}
		</div>
	)
}

export default DefaultLayout; 