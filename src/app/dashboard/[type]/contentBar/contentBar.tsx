'use client';

import { InputSearch } from '@/components/common/inputsearchdash/inputsearchdash';
import { obsModal } from '@/components/global/modal/obsModal';

export const ContentBar = () => {
	const onchange = (event: any) => {
		console.log(event.target.value);
	};
	return (
		<div className='w-full h-max flex'>
			<div className='flex gap-4 h-[3rem]'>
				<div className='w-[15rem] h-full'>
					<InputSearch placeholder='Buscar..' onSearch={onchange} onSubmit={onchange} initValue='' />
				</div>
				<button
					onClick={() => {
						obsModal.next({
							upload: {
								value: true,
							},
						});
					}}
					className='cursor-pointer h-full w-max bg-success p-4 text-white flex items-center justify-center rounded-md select-none'
				>
					Agregar Música
				</button>
				<button className='cursor-pointer h-full w-max bg-info p-4 text-white flex items-center justify-center rounded-md select-none'>Agregar Categoría</button>
				<button className='cursor-pointer h-full w-max bg-danger p-4 text-white flex items-center justify-center rounded-md select-none'>Eliminar Canción</button>
			</div>
		</div>
	);
};
