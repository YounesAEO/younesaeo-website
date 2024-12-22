/** @type {import('next').NextConfig} */
const nextConfig = {
	basePath: '/younesaeo-website',
	output: 'export',
	eslint: {
		ignoreDuringBuilds: true,
	},
	reactStrictMode: true,
};

export default nextConfig;
