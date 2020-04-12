import styled from 'styled-components';

export const ResultContainer = styled.section`
	display: flex;
	overflow: hidden; 
	height: 100%;
`;

export const LeftContainer = styled.article`
	width: 620px; 
	margin-right: 5px;
	box-shadow: 2px 0 0 ${p => p.theme.colors.border}; 
	overflow-y: auto;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${p => p.theme.colors.grayWhite};
`

export const RightContainer = styled.article`
	width: 620px; 
	margin-left: 5px;
	overflow-y: auto;
	display: flex; 
	background-color: ${p => p.theme.colors.grayWhite};
`