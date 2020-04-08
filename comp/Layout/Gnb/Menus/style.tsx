import styled, { css } from 'styled-components';


export const StyledMenuList = styled.ul`
	display: flex;
	flex-wrap: wrap; 
	align-items: space-between; 
	margin-left: 16px;
	> li:last-child {
		margin-right: 0; 
	} 
`; 

export const StyledMenuItem = styled.li`
	margin-right: 16px;
	display: block;
`;