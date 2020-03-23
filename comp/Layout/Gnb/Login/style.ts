import styled, { css } from 'styled-components';

type ButtonProps = {
	isSigning : boolean
}

const StyledButton = styled.button<ButtonProps>`
	${p =>  p.isSigning ?  }
`