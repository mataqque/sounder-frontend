import Link from 'next/link';
import bear from '@/assets/multimedia/animation/bear.json';
import { IconLottie } from '@/components/ui-global/IconLottie/IconLottie';
import Layout from '@/components/page/layout';

export default function NotFound() {
	const properties = {
		class: 'loader-page',
		icon: bear,
		positionCss: 'relative',
		zIndex: 30,
	};
	return (
		<Layout>
			<meta name='robots' content='noindex'></meta>
			<div className='page-error-404 background_img pt-[16rem] pb-[10rem]'>
				<div className='flex md:flex-row flex-col justify-center items-center z-[1] relative'>
					<div className='icon-svg md:mr-10 mr-0 w-[19rem]'>
						<IconLottie properties={properties} delay={1800}></IconLottie>
					</div>
					<div className='content-error'>
						<h1 className='text-8/0 text-primary leading-none'>404</h1>
						<h2 className='text-1/4 text-secondary leading-tight'>Página no encontrada</h2>
					</div>
				</div>
			</div>
		</Layout>
	);
}
