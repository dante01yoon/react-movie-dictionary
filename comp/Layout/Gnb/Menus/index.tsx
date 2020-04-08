import React, { FC, ReactNode } from 'react'; 
import AutoLink from 'comp/AutoLink';
import { GnbVm } from 'store/Gnb';
import GnbLogin from 'comp/Layout/Gnb/Login';
import {
	StyledMenuList,
	StyledMenuItem
} from './style'; 

export const GnbMenus: FC<{
	gnbVm: GnbVm
}> = (
	{
		gnbVm
	}) => {
	return (
		<>
			<StyledMenuList>
				<StyledMenuItem>			
					<AutoLink href="login">
						<GnbLogin gnbVm={gnbVm}/>
					</AutoLink>
				</StyledMenuItem>
				<StyledMenuItem>
					<AutoLink href="search">
						Search
					</AutoLink>
				</StyledMenuItem>
				<StyledMenuItem>
					<AutoLink href="movie">
						Movie
					</AutoLink>
				</StyledMenuItem>
				<StyledMenuItem>
					<AutoLink href="tv">
						TV
					</AutoLink>
				</StyledMenuItem>
			</StyledMenuList>
		</>
	)
}
