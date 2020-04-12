import React, { FC } from 'react';
import {
	StyledDesContainer,
	HeaderTitle,
	CardHeader,
	HeaderParagraph,
} from './style';
import SEContainer from './SEContainer';
const DesContainer: FC<{

}> =({

}) => {
	return(
		<StyledDesContainer>
			<CardHeader>
				<HeaderTitle>드림 씨어터</HeaderTitle>
				<HeaderParagraph>May 04, 2020</HeaderParagraph>
			</CardHeader>
			<SEContainer/>

		</StyledDesContainer>
	)
}

export default DesContainer;