import CopyEmail from './copy-email';

export function Footer() {
	return (
		<footer className="bottom-0 border-t py-4">
			<div className="max-w-4xl mx-auto px-4">
				<div className="flex flex-col items-center space-y-4">
					<div className="flex space-x-6">
						<CopyEmail text="email" />
						<a
							href="https://linkedin.com/in/younes-abou"
							className="hover:underline">
							linkedin
						</a>
						<a
							href="https://twitter.com/younesaeo"
							className="hover:underline">
							twitter
						</a>
						<a
							href="https://github.com/younesaeo"
							className="hover:underline">
							github
						</a>
					</div>
					<p className="text-sm text-gray-600">
						© {new Date().getFullYear()} Younes AEO. All rights
						reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
