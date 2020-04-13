import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';
import {
	StyledImgContainer,
	StyledImg,
} from './style';
const ImgContainer: FC<{
	src: string 
}> = observer(({
	src
}) => {
	return(
			<StyledImgContainer>
				<StyledImg src={src} />
			</StyledImgContainer>
	)
}); 

export default ImgContainer; 