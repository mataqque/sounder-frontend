'use client';

import { useDispatch, useSelector } from 'react-redux';
import { CardMusic } from '../../components/cards/cards';
import { useEffect } from 'react';
import { getFilesMusics } from '@/store/slices/soundSlice';
import { IFile, IMusic } from '@/store/slices/sounds.interface';

interface Iprops {
	data: {
		page: string;
		perPage: number;
		totalItems: number;
		totalPages: number;
		items: IFile[];
	};
}

export function ContentCards({ data }: { data: IMusic }) {
	const dispatch = useDispatch();
	const files = useSelector(getFilesMusics);
	console.log(files);
	const array = new Array(100).fill(0).map((_, i) => {
		return {
			collectionId: 'njyb3kct9xo1h04',
			collectionName: 'musica',
			created: '2024-07-06 05:33:37.799Z',
			file: 'oh_me_vengo_faraon_YSBe7BKNoq.mp3',
			id: 'pbza7otncxyyprt',
			name: 'oh me vengo',
			updated: '2024-07-06 05:33:37.799Z',
		};
	});
	useEffect(() => {
		// dispatch(updateMusics(data));
	}, []);
	return (
		<div className='w-full h-full overflow-hidden'>
			{/* {files.length > 0 && (
				<div className='ctx-card grid grid-cols-[repeat(auto-fill,minmax(10rem,1fr))] auto-rows-max gap-x-2 gap-y-4 overflow-x-hidden overflow-y-auto h-full scroll'>
					{files.map((i, index) => (
						<CardMusic key={index + ''} item={i}></CardMusic>
					))}
				</div>
			)}
			{files.length <= 0 && (
				<div className=' m-auto w-full h-full flex items-center justify-center pb-[10%]'>
					<span className='text-white text-1/4 text-center'>No hay canciones</span>
				</div>
			)} */}
		</div>
	);
}
