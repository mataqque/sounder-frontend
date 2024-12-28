'use client';
import { memo } from 'react';
import { obsPlayer } from '../player/obsplayer';
import { useDispatch } from 'react-redux';
import { IFile } from '@/store/slices/sounds.interface';

export const CardMusic = memo(function MemoCard({ item }: { item: IFile }) {
	const dispatch = useDispatch();
	return (
		<div
			className={`w-full hover:scale-[1.03] transition-[transform] duration-300 flex flex-col gap-2 cursor-pointer bg-transparent [&.active]:bg-[#ffffff14] p-[.3rem] rounded-[.5rem] ${
				item.selected ? 'active' : ''
			}`}
			onClick={() => {
				obsPlayer.next(item);
			}}
		>
			<div className='h-20 bg-secondary rounded-lg border border-solid border-[#ffffff15]  w-full flex justify-center items-center'>
				<div className='mask-center icon-music bg-[#ffffff96] w-10 h-10'></div>
			</div>
			<div className='text-0/8 text-white leading-tight px-1'>{item.name}</div>
		</div>
	);
});
