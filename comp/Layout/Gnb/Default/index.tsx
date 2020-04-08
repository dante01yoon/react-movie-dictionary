import React, { FC, useEffect } from 'react';
import GnbLogin from '../Login'; 
import { GnbVm } from 'store/Gnb';
const DefaultLayout: FC<{
	gnbVm : GnbVm
}> = ({
	gnbVm
}) => {
	const { 
		isSignedIn, 
		isSigningIn,
		isSigningOut
	} = gnbVm; 
	return (
		<div>
			{
				isSignedIn 
				?
			<div>Hi there?</div>
			  : 
			<GnbLogin gnbVm={gnbVm}/>
			}
		</div>
	)
}

export default DefaultLayout; 