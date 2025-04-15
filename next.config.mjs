/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	eslint: {
		ignoreDuringBuilds: true,
	},
	reactStrictMode: true,
	images: {
		unoptimized: true,
	},
	trailingSlash: true,
};

export default nextConfig;
