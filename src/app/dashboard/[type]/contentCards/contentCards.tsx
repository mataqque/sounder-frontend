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

	return (
		<div className='w-full h-full'>
			{items.length > 0 && (
				<div className='ctx-card grid grid-cols-[repeat(auto-fill,minmax(10rem,1fr))] gap-4'>
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
