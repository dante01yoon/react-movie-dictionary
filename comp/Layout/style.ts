import styled, { css } from 'styled-components';

export const StyledNav = styled.nav`
	position: fixed;
	z-index: ${p => p.theme.zIndex.NAV};
	width: 100%;
	height: 56px;
`;

export const Main = styled.main`
	position:relative;
	margin: 0 auto;
`;

