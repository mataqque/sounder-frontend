'use client';
import { useEffect, useState } from 'react';
import { InputSearchDash } from '@/components/common/inputsearchdash/inputsearchdash';
import { type IList_sidebars, type IMenuSidebar, itemSidebar } from './config';
import { SidebarSubItems } from './subitems';
import { NavbarLink } from '@/components/common/nav/link';

export const AsideBar = () => {
	const [open, setOpen] = useState(true);
	const change = (id: string) => {};
	const eventClose = (value: boolean) => {
		setOpen(value);
	};
	useEffect(() => {}, []);
	return (
		<aside
			className={`sideractive  max-w-[0rem] w-full overflow-hidden items-end duration-300 backdrop-blur-[40px] ${
				open ? 'active' : ''
			} [&.active]:max-w-[20rem] mobile:[&.active]:max-w-[100vw]  mobile:w-full fixed md:relative z-[3] flex flex-col h-screen`}
		>
			<div className='flex flex-col min-w-[20rem] max-w-[20rem] mobile:w-full mobile:max-w-full h-full'>
				<div className='flex flex-col overflow-hidden w-full h-full'>
					<div className='flex items-center pt-4 px-4 gap-2 w-full'>
						<div className='w-4 h-4 rounded-full bg-[#f34a4a]'></div>
						<div className='w-4 h-4 rounded-full bg-[#f6ab1a]'></div>
						<div className='w-4 h-4 rounded-full bg-[#3ac270]'></div>
						<div
							className='w-12 h-full flex items-center justify-center cursor-pointer ml-auto'
							onClick={() => {
								eventClose(false);
							}}
						>
							<div className='icon mask icon-menu  bg-white h-8 w-8'></div>
						</div>
					</div>
					<div className={'flex items-center px-4 py-6'}>
						<div className='text-white font-imb_bold text-1/2 bg-[#2363da] w-10 h-10 flex items-center justify-center text-center rounded-md leading-none mr-4'>D</div>
						<h3 className='text-white IBMPlexSans-Bold text-1/3'>Sounder</h3>
					</div>
					<div className='flex items-center px-4 '>
						<InputSearchDash></InputSearchDash>
					</div>
					<div className='px-4 my-4'>
						<div className='w-full h-[1px] bg-white opacity-10'></div>
					</div>
					<div className='overflow-y-hidden'>
						<div className={'sidebar_menu overflow-y-scroll h-full px-4 scroll'}>
							{itemSidebar.map((item, index: number) => {
								return (
									<div className='flex flex-col' key={'sidebar-' + index}>
										<div className='text-0/9 text-white opacity-70 mb-2'>{item.title}</div>
										<div className='flex flex-col gap-2 text-white mb-4' key={'sidebar-' + index}>
											{item.list_sidebars.map((subitem: IList_sidebars, index: number) => {
												if (subitem?.sublist) {
													return <SidebarSubItems item={subitem} index={index} key={'sidebar-item-' + index}></SidebarSubItems>;
												} else {
													return (
														<NavbarLink
															to={subitem?.to}
															className={
																'w-full min-h-12 h-12 bg-red flex items-center rounded-lg  hover:bg-[#151b4b] px-4 cursor-pointer duration-300 [&.active]:bg-[#151b4b]'
															}
															key={'sidebar-item-' + index}
														>
															<div className='flex '>
																<div className={subitem?.icon + ' mask-left w-5 h-5 mr-4 bg-white'}></div>
																<div className='text-1/0'>{subitem?.title}</div>
															</div>
															{subitem?.notification ? <div className='notification'>{subitem.notification}</div> : <></>}
														</NavbarLink>
													);
												}
											})}
										</div>
									</div>
								);
							})}
						</div>
					</div>
					<div className='mt-auto'>
						<div className='px-4 my-4'>
							<div className='w-full h-[1px] bg-white opacity-10'></div>
						</div>
					</div>
					<div className='px-4'>
						<div className={`w-full min-h-12 h-12 bg-red flex items-center rounded-lg [&.active]:bg-[#293752] hover:bg-[#293752] px-4 cursor-pointer duration-300`}>
							<div className='flex '>
								<div className={'icon-settings mask-left w-5 h-5 mr-4 bg-white'}></div>
								<div className='text-1/0 text-white'>Configuración</div>
							</div>
						</div>
					</div>
				</div>
				<div className='footer-sidebar flex px-4 py-4'>
					<div className='option_theme'></div>
					<div className='flex user-info w-full '>
						<div className='mr-3'>{/* <IconAvatar name='Flavio' photo=''></IconAvatar> */}</div>
						<div className='flex content_part w-full'>
							<div className='flex flex-col '>
								<span className='text-white'>Flavio</span>
								<span className='text-white opacity-70'>Administrador</span>
							</div>
							<div
								className='icon icon-logout ml-auto mask-right w-8 h-10 bg-white cursor-pointer'
								onClick={() => {
									eventClose(false);
								}}
							></div>
						</div>
					</div>
				</div>
			</div>
		</aside>
	);
};
