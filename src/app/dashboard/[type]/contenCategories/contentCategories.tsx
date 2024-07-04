'use client';

import { useMemo } from 'react';
import { useDispatch } from 'react-redux';

export interface ICategory {
	uuid: string;
	name: string;
	description: string;
}
export function ContentSubCategories() {
	// const [getSubCategories, {}] = useSubcategoriesMutation();
	// const [getNotes, {}] = useNotesMutation();
	// const dispatch = useDispatch();

	// const subCategory: ICategory[] = useSelector((state: any) => state.categorySlice.subCategory);
	const subCategory = [
		{
			uuid: '1',
			name: 'Romanticas',
			description: 'Romanticas',
		},
		{
			uuid: '1',
			name: 'Romanticas',
			description: 'Romanticas',
		},
		{
			uuid: '1',
			name: 'Romanticas',
			description: 'Romanticas',
		},
	];
	const handleSubCategory = async (c: any): Promise<any> => {
		// const { data }: any = await getNotes({ uuid: c.uuid });
		// dispatch(updateNotes(data.data));
	};

	return (
		<div className='w-full h-max flex gap-4 py-2'>
			<div className='flex xsm:hidden w-7 h-7 border border-solid border-[#b8cad9] rounded-lg items-center justify-center cursor-pointer hover:bg-primary group duration-300 toggle-inactive-button'>
				<div className='w-[60%]  h-[60%] icon-sidebar mask-center bg-primary group-hover:bg-white group-hover:border-primary duration-300'></div>
			</div>
			{subCategory.map((item: ICategory) => {
				return <SubCategory handleSubCategory={handleSubCategory} item={item} key={item.uuid} />;
			})}
		</div>
	);
}

const SubCategory = ({ handleSubCategory, item }: { handleSubCategory: (c: any) => void; item: ICategory }) => {
	const dispatch = useDispatch();
	// const [deleteCategory, {}] = useDeleteCategoryMutation();
	// const [getCategories, {}] = useCategoriesMutation();
	const handleDelete = async () => {
		// confirmAction('¿Estas seguro de eliminar esta categoria?', async () => {
		// 	const { data }: any = await deleteCategory({ uuid: item.uuid });
		// 	if (data.status == 200) {
		// 		dispatch(deleteSubCategory(item));
		// 	}
		// });
	};
	const colorRandom = useMemo(() => {
		const randomColor = Array.from({ length: 3 }, () => Math.floor(Math.random() * 128) + 64);
		const hexColor = randomColor.map(component => component.toString(16).padStart(2, '0')).join('');
		return `#${hexColor}`;
	}, []);
	return (
		<div className='relative h-[2rem]'>
			<div
				className={`w-max h-full px-4 rounded-full flex items-center justify-center text-white text-sub-category cursor-pointer`}
				style={{ backgroundColor: colorRandom }}
				onClick={() => {
					handleSubCategory(item);
				}}
			>
				{item.name}
			</div>
			<div
				className='w-5 h-5 bg-danger flex items-center justify-center rounded-full absolute top-0 right-0 transform translate-x-[40%] -translate-y-[40%] cursor-pointer'
				onClick={() => {
					// handleDelete();
				}}
			>
				<div className='w-[60%] h-[60%] bg-white rounded-full mask-center icon-close'></div>
			</div>
		</div>
	);
};
