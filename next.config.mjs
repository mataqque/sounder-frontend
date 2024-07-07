/** @type {import('next').NextConfig} */
const nextConfig = {
	async rewrites() {
		return [
			{
				source: '/api/files/:path*',
				destination: 'http://sounder-backend:8080/api/files/:path*',
			},
			{
				source: '/api/collections/:path*',
				destination: 'http://sounder-backend:8080/api/collections/:path*',
			},
		];
	},
};

export default nextConfig;
