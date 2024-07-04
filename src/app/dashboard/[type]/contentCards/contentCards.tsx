'use client';

import { CardMusic } from '../../components/cards/cards';

export function ContentCards({ data }: { data: any }) {
	console.log(data);
	const array: number[] = [];

	return (
		<div className='w-full h-full'>
			{array.length > 0 && (
				<div className='ctx-card grid grid-cols-[repeat(auto-fill,minmax(10rem,1fr))] gap-4'>
					{array.map((i, index) => (
						<CardMusic key={index + ''}></CardMusic>
					))}
				</div>
			)}
			{array.length <= 0 && (
				<div className=' m-auto w-full h-full flex items-center justify-center pb-[10%]'>
					<span className='text-white text-1/4 text-center'>No hay canciones</span>
				</div>
			)}
		</div>
	);
}
