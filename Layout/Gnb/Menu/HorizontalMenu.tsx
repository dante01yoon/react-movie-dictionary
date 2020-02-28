import React, { FC } from 'react'; 
import Styled from './styles'; 

const {
    StyledMenuList, 
    StyledMenuItem,
    StyledDropdownUnderlay,
    StyledMenuDropdown,
    StyledMenuDropdownItem
} = Styled; 

type Props = {
    isSignedIn : boolean | undefined; 
    userImage: string | null;
    
}

export const GnbHorizontalMenu: FC<Props> = ({
    isSignedIn,
    userImage
}) => {
    return (
        <>
            <StyledMenuList>
                
            </StyledMenuList>
        </>
    )
}