import React, { FC, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { StyledButton } from './style'; 
const GnbLogin: FC<{
	isSignedIn: boolean, 
	isSignedOut: boolean
	isSigningIn: boolean,
	isSigningOut: boolean
}> = observer(({
	isSigningIn = false,
	isSigningOut = false,
	isSignedIn = false, 
	isSignedOut = false 
}) => {
	useEffect(() => {
		
	},[]);
	return(
		isSigningIn ||  isSigningOut 
			? 
				<StyledButton isLoading= {true}>
					loading...				
				</StyledButton>
			:
				<StyledButton isLoading= {false} >
					{
						isSignedIn ? 'signOut' : isSignedOut ? 'signIn / signUp' : 'check the status'
					}
				</StyledButton>			
	)
});

export default GnbLogin; 