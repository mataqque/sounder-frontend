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
				title: 'Multimedia',
				icon: 'icon-music',
				segment: 'Sonidos',
				to: '/dashboard/multimedia',
			},
		],
	},

	{
		title: 'Menú',
		list_sidebars: [
			{
				title: 'Reportes',
				icon: 'icon-music',
				segment: 'gestion-de-tareas',
				to: '/dashboard/equalizador',
			},
			{
				title: '',
				icon: 'icon-music',
				segment: 'gestion-de-tareas',
				to: '/dashboard/equalizador',
			},
			{
				title: 'Preferencias',
				icon: 'icon-music',
				segment: 'gestion-de-tareas',
				to: '/dashboard/equalizador',
			},
			{
				title: 'Mailing',
				icon: 'icon-music',
				segment: 'gestion-de-tareas',
				to: '/dashboard/equalizador',
			},
			{
				title: 'Bot',
				icon: 'icon-music',
				segment: 'gestion-de-tareas',
				to: '/dashboard/equalizador',
			},
			{
				title: 'Acceso',
				icon: 'icon-music',
				segment: 'gestion-de-tareas',
				to: '/dashboard/equalizador',
			},
			{
				title: 'Proyectos',
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
