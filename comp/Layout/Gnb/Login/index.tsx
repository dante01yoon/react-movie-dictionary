import React, { FC, useState } from 'react';
import { observer } from 'mobx-react-lite';

const GnbLogin: FC<{}>  = () => {
	const onSubmit = () => {
		
	};
	return (
		<div>
			<form onSubmit={onSubmit}>
				<input
					placeholder={"e-mail"}
					name="id"
				/>
				<input
					placeholder={"password"}
					name="password"
				/>
				<h1></h1>
				<button type="submit">Log in</button>
			</form> 
		</div>
	)
}