'use client';
import { useState } from 'react';
import { Toast } from './toast';

export function Footer() {
	const [showToast, setShowToast] = useState(false);

	const handleEmailClick = (e: React.MouseEvent) => {
		e.preventDefault();
		navigator.clipboard.writeText('y.abouelomoum09@gmail.com');
		setShowToast(true);
		setTimeout(() => setShowToast(false), 2000);
	};

	return (
		<footer className="border-t pt-8 mt-16">
			<div className="flex flex-col items-center space-y-4">
				<div className="flex space-x-6">
					<a
						onClick={handleEmailClick}
						className="hover:underline cursor-pointer">
						email
					</a>
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
					© {new Date().getFullYear()} Younes Abou El Omoum. All
					rights reserved.
				</p>
			</div>
			<Toast message="email copied to clipboard!" isVisible={showToast} />
		</footer>
	);
}
