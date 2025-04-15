import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import { Nav } from './components/nav';
import { Footer } from './components/footer';

import './globals.css';

const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Younes AEO',
	description: 'Just another random guy on the internet.',
	icons: {
		icon: [
			{ url: '/favicon.ico' },
			{ url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
			{ url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
		],
		apple: [{ url: '/apple-touch-icon.png' }],
		other: [
			{
				url: '/android-chrome-192x192.png',
				sizes: '192x192',
				type: 'image/png',
			},
			{
				url: '/android-chrome-512x512.png',
				sizes: '512x512',
				type: 'image/png',
			},
		],
	},
	manifest: '/site.webmanifest',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={jetbrainsMono.className}>
				<div className="min-h-screen flex flex-col">
					<Nav />
					<main className="max-w-4xl mx-auto px-4 py-8 flex-grow">
						{children}
					</main>
					<Footer />
				</div>
			</body>
		</html>
	);
}
