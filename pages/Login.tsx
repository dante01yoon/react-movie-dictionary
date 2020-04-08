import React, { FC } from 'react'; 
import { observer } from 'mobx-react-lite';
import { useStore } from 'store'; 
import DefaultLayout from 'comp/Layout';

const LoginView = observer(() => {
	const getPictureList = useStore("picList");
	const { fetchImages, pictureList} = getPictureList; 
	const gnbVm = useStore('gnb')?.data;
	return(
			<DefaultLayout gnbVm={gnbVm}> 
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
			</DefaultLayout>
	)
})

export default LoginView;