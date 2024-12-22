import Link from 'next/link';

export function Nav() {
	return (
		<nav className="mb-12">
			<div className="flex items-center space-x-4 text-sm">
				<Link href="/" className="hover:underline">
					home
				</Link>
				<span>·</span>
				<Link href="/projects" className="hover:underline">
					projects
				</Link>
				<span>·</span>
				<Link href="/writings" className="hover:underline">
					writings
				</Link>
				<span>·</span>
				<Link href="/side-quests" className="hover:underline">
					side quests
				</Link>
			</div>
		</nav>
	);
}
