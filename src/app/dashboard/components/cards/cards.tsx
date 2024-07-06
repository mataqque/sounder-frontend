import { obsPlayer } from '../player/obsplayer';
import { IFile } from './file.interface';

export const CardMusic = ({ item }: { item: IFile }) => {
	return (
		<div
			className='w-full hover:scale-110 transition-[transform] duration-300 flex flex-col gap-2'
			onClick={() => {
				obsPlayer.next(item);
			}}
		>
			<div className='h-20 bg-secondary rounded-lg border border-solid border-[#ffffff15] cursor-pointer '></div>
			<div className='text-0/8 text-white leading-tight px-1'>{'GT ft.Robert - can we be friends'}</div>
		</div>
	);
};
