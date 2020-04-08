import React, { FC, useState, ReactNode } from 'react'
import Link from 'next/link';     

const AutoLink: FC<{
	href: string
	children: ReactNode
}> = ({
	href,
	children
}) => {
	return (
		<Link href={href}>
			<a>
				{children}			
			</a>
		</Link>
	)
}

export default AutoLink;