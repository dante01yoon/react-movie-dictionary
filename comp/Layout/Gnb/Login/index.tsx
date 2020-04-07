import React, { FC, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useForm } from 'react-hook-form';
import { useStore } from 'store'; 
type FormData = {
	id: string;
	password: string; 
}; 

const GnbLogin: FC = observer(() => {
	const onSignIn = () => {
			const { status, signIn, error } = useStore('auth'); 
	}
	return (
		<>
			Login 
		</>
	)
});