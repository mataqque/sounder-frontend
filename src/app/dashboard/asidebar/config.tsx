export interface IList_sidebars {
	title: string;
	icon: string;
	segment: string;
	to: string;
	notification?: number;
	sublist?: IList_sidebars[];
}

export interface IMenuSidebar {
	title: string;
	list_sidebars: IList_sidebars[];
}
export const itemSidebar: IMenuSidebar[] = [
	{
		title: 'Media',
		list_sidebars: [
			{
				title: 'Música',
				icon: 'icon-music',
				segment: 'Sonidos',
				to: '/dashboard/musica',
			},
			{
				title: 'Sonidos',
				icon: 'icon-sound',
				segment: 'Sonidos',
				to: '/dashboard/sonidos',
			},
		],
	},

	{
		title: 'Menú',
		list_sidebars: [
			{
				title: 'Equalizador',
				icon: 'icon-music',
				segment: 'gestion-de-tareas',
				to: '/dashboard/equalizador',
			},
		],
	},
];

export const planeRoutes = itemSidebar
	.map((item: any): { to: string[]; component: React.ReactNode } => {
		return item.list_sidebars.map((subitem: any): { to: string[]; component: React.ReactNode } => {
			return {
				to: subitem.to,
				component: subitem.component,
			};
		});
	})
	.flatMap((item: any) => item);

console.log('planeRoutes', planeRoutes);
