import Link from 'next/link';

export function Nav() {
	return (
		<nav className="top-0 py-4">
			<div className="max-w-4xl mx-auto px-4">
				<div className="flex items-center space-x-4 text-sm">
					<Link href="/" className="hover:underline">
						home
					</Link>
					<span>·</span>
					{/* <Link href="/writings" className="hover:underline">
						writings
					</Link>
					<span>·</span> */}
					<Link href="/side-quests" className="hover:underline">
						side quests
					</Link>
					<span>·</span>
					<Link href="/questions" className="hover:underline">
						questions
					</Link>
					<span>·</span>
					<Link href="/wrappers" className="hover:underline">
						wrappers
					</Link>
				</div>
			</div>
		</nav>
	);
}
