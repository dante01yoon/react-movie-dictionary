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
    isMyMenuVisible: boolean | undefined; 
}

export const GnbHorizontalMenu: FC<Props> = ({
    isSignedIn,
    userImage,
    isMyMenuVisible
}) => {
    return (
        <>
            <StyledMenuList>
                <StyledMenuItem>
                    Search 
                </StyledMenuItem>
                <StyledMenuItem>
                    About
                </StyledMenuItem>
                {
                isSignedIn 
                ?
                    <StyledMenuItem>My Menu</StyledMenuItem>
                :
                    <StyledMenuItem>SignIn</StyledMenuItem>   
                }        
            </StyledMenuList>
            { 
                isMyMenuVisible  &&  
                <StyledDropdownUnderlay>
                    <StyledMenuDropdown>
                        <StyledMenuDropdownItem>
                            My Menu
                        </StyledMenuDropdownItem>
                    </StyledMenuDropdown>
                </StyledDropdownUnderlay>
            }
        </>
    )
}