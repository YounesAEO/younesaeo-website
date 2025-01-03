import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';

const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Younes AEO',
	description: 'Just another random guy on the internet.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={jetbrainsMono.className}>
				<main className="max-w-4xl mx-auto px-4 py-8">{children}</main>
			</body>
		</html>
	);
}
