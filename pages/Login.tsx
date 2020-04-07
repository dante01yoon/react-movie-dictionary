import React, { FC } from 'react'; 
import { observer } from 'mobx-react-lite';
import { useStore } from 'store'; 
const LoginView = observer(() => {
	const getPictureList = useStore("picList");
	const { fetchImages, pictureList} = getPictureList; 
	return(
	<>
		{
			pictureList.length > 0  
				? 
				pictureList.map((picture, index) => {
					return <div key={index}>{picture.author}</div>
				})
				:
				<div>empty</div>
		}	
		<button onClick={fetchImages}>fetch Images</button>
	</>
	
	)
})

export default LoginView;