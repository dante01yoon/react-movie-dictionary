import styled from 'styled-components';

type ButtonProps = {
	isLoading : boolean
}

export const StyledButton = styled.button<ButtonProps>`
	${p => p.isLoading  
		? 
			`background-color : ${p.theme.colors.primary}`
		:
			`background-color: ${p.theme.colors.primary}`
	}
`
