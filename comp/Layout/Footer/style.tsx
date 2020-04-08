import styled, { css } from 'styled-components';

export const StyledFooter = styled.footer`
	position: relative;
	display: flex;
	height: 188px;
	padding: 24px;
	background-color: ${p => p.theme.colors.cobalt}; 
`;

export const StyledFooterItem = styled.div`
	flex: 1 0 auto;
	display:flex;
	justify-content: center; 
	align-items: center;
	height:100%;
	width: 202px; 
	flex-direction: column 
`;

export const StyledFooterImg = styled.img`
	width: 176px;
	
`
export const StyledFooterItemColumn = styled.div`
	display:flex	
`;