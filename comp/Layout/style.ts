import styled, { css } from 'styled-components';

export const StyledNav = styled.nav`
	position: fixed;
	z-index: ${p => p.theme.zIndex.NAV};
	width: 100%;
	height: 64px;
	background-color: ${ p => p.theme.colors.white}; 
`;

export const Main = styled.main`
	position:relative;
	margin: 0 auto;
`;

export const StyledLogo = styled.img`
	width: 202px; 
	height: 64px;
`;

export const StyledRightMenu = styled.div`
	height: 100%;
	float: right; 
	margin-right: 16px;
	display: flex;
	align-items: center; 
`;

export const StyledLogoBox = styled.div`
	float: left; 
	margin-left: 16px; 
`

export const EmptyMargin = styled.div`
	width: 100%;
	height: 64px;
`