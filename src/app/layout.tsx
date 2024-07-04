import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import AuthProvider from '@/components/context/AuthProvider';
import { Providers } from '@/store/provider';
import '@/assets/scss/index.scss';
import '@/assets/scss/index.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Sounder',
	description: '',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<head>
				<meta name='theme-color' content='#f86e91' />
				<link rel='icon' href='/brand-lazo.png' sizes='any' type='image/x-icon' />
				<meta name='viewport' content='width=device-width,height=device-height,initial-scale=1,maximum-scale=1' />
			</head>
			<body>
				<AuthProvider>
					<Providers>{children}</Providers>
				</AuthProvider>
			</body>
		</html>
	);
}
