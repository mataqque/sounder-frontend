import { FormEventHandler } from 'react';
import './style.scss';
import { useDispatch } from 'react-redux';
// import { updateFiles } from '../../files.slice';
export const InputSearchDash = () => {
	const dispatch = useDispatch();

	const handleSearch = (event: any) => {};
	return (
		<form className='form_search_dash w-full' onSubmit={handleSearch}>
			<div className='h-14 w-full relative text-gray-600 focus-within:text-gray-400'>
				<span className='absolute inset-y-0 left-0 flex items-center pl-6'>
					<button type='submit' className='p-1 focus:outline-none focus:shadow-outline relative'>
						<i className='w-6 h-6 bg-white icon-search absolute flex mask-center top-0 bottom-0 my-auto left-1'></i>
					</button>
				</span>
				<input
					type='search'
					name='q'
					className='py-2 text-base text-white rounded-[.6rem] pl-14 focus:outline-none focus:text-white input_search w-full h-full'
					placeholder='Search...'
					autoComplete='off'
				/>
			</div>
		</form>
	);
};
