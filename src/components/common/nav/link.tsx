'use client';
import Link from 'next/link';
import { usePathname, useSelectedLayoutSegment } from 'next/navigation';

interface IPropsNavbarLinkItem {
	to: string;
	children: JSX.Element | JSX.Element[] | string;
	className?: string;
}
export const NavbarLink = ({ to, children, className }: IPropsNavbarLinkItem) => {
	const pathName = usePathname();
	const isActive = pathName === to;
	return (
		<Link href={to} className={isActive ? className + ' active' : className + ''}>
			{children}
		</Link>
	);
};
