import React, { FC, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { StyledButton } from './style'; 
import { GnbVm } from 'store/Gnb';
const GnbLogin: FC<{
	gnbVm: GnbVm
}> = observer(({
	gnbVm
}) => {
	const {isSigningIn, isSigningOut, isSignedIn} = gnbVm; 
	return(
		isSigningIn ||  isSigningOut 
			? 
				<StyledButton isLoading= {true}>
					loading...				
				</StyledButton>
			:
				<StyledButton isLoading= {false} >
					{
						isSignedIn ? 'signOut' : 'signIn / signUp' 
					}
				</StyledButton>			
	)
});

export default GnbLogin; 