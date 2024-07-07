import { obsPlayer } from '../player/obsplayer';
import { IFile } from './file.interface';

export const CardMusic = ({ item }: { item: IFile }) => {
	return (
		<div
			className='w-full hover:scale-[1.03] transition-[transform] duration-300 flex flex-col gap-2 cursor-pointer'
			onClick={() => {
				obsPlayer.next(item);
			}}
		>
			<div className='h-20 bg-secondary rounded-lg border border-solid border-[#ffffff15]  w-full flex justify-center items-center'>
				<div className='mask-center icon-music bg-[#ffffff96] w-10 h-10'></div>
			</div>
			<div className='text-0/8 text-white leading-tight px-1'>{'GT ft.Robert - can we be friends'}</div>
		</div>
	);
};
