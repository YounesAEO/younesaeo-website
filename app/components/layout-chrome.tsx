'use client';

import { usePathname } from 'next/navigation';
import { Nav } from './nav';
import { Footer } from './footer';

// Renders the site chrome (nav + footer) around every page — except routes
// that should stand alone, like /research, which is just the embedded page.
export function LayoutChrome({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();
	const bare = pathname?.startsWith('/research');

	if (bare) return <>{children}</>;

	return (
		<div className="min-h-screen flex flex-col">
			<Nav />
			<main className="max-w-4xl mx-auto px-4 py-8 flex-grow">
				{children}
			</main>
			<Footer />
		</div>
	);
}
