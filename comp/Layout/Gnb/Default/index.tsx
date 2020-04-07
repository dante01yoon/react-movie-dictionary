import React, { FC, useEffect } from 'react';
import GnbLogin from '../Login'; 
import { GnbVm } from 'store/Gnb';
const DefaultLayout: FC<{
	GnbVm : GnbVm
}> = ({
	GnbVm
}) => {
	const { 
		isDarkMode, 
		isSignedIn, 
		isSigningIn,
		isSigningOut
	} = GnbVm; 
	return (
		<div>
			<GnbLogin isDarkMode= {isDarkMode} isSignedIn={!!isSignedIn}/>
		</div>
	)
}

export default DefaultLayout; 