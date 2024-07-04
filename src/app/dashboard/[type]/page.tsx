import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { ContentSubCategories } from './contenCategories/contentCategories';
import { ContentCards } from './contentCards/contentCards';

interface Iprops {
	params: { type: string };
}
const fetching = async () => {
	const data = fetch('http://sounder-backend:8080/api/collections/musica/records', { cache: 'no-cache' })
		.then(res => res.json())
		.catch(error => console.error(error));
	console.log(data);
	return data;
};
export default async function TypeSound({ params }: Iprops) {
	const data = await fetching();
	return (
		<section className='text-1/5 p-4 w-full h-full overflow-hidden flex flex-col'>
			<h2 className='text-white text-1/3 mb-2'>Galeria de música</h2>
			<div className='w-full h-[1px] bg-[#ffffff15] my-2'></div>
			<div className='flex flex-col mb-2'>
				<ContentSubCategories />
			</div>
			<ContentCards data={data} />
		</section>
	);
}
