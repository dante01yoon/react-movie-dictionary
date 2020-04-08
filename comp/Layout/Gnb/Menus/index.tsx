import React, { FC, ReactNode } from 'react'; 
import Link from 'next/link'; 
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
					<Link href="/login">
						<a>	
							<GnbLogin gnbVm={gnbVm}/>
						</a>
					</Link>
				</StyledMenuItem>
				<StyledMenuItem>
					<Link href="/movie">
						<a>Movie</a>
					</Link>
				</StyledMenuItem>
				<StyledMenuItem>
					<Link href="/tv">
						<a>TV</a>
					</Link>
				</StyledMenuItem>
			</StyledMenuList>
		</>
	)
}
