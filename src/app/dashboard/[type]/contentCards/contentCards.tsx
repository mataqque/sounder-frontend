'use client';

import { CardMusic } from '../../components/cards/cards';
import { IFile } from '../../components/cards/file.interface';

interface Iprops {
	data: {
		page: string;
		perPage: number;
		totalItems: number;
		totalPages: number;
		items: IFile[];
	};
}

export function ContentCards({ data }: Iprops) {
	const { items = [] } = data;
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
	return (
		<div className='w-full h-full overflow-hidden'>
			{items.length > 0 && (
				<div className='ctx-card grid grid-cols-[repeat(auto-fill,minmax(10rem,1fr))] auto-rows-max gap-4 overflow-x-hidden overflow-y-auto h-full scroll'>
					{items.map((i, index) => (
						<CardMusic key={index + ''} item={i}></CardMusic>
					))}
				</div>
			)}
			{items.length <= 0 && (
				<div className=' m-auto w-full h-full flex items-center justify-center pb-[10%]'>
					<span className='text-white text-1/4 text-center'>No hay canciones</span>
				</div>
			)}
		</div>
	);
}
