'use client';

import { useState } from 'react';
import { Toast } from './toast';

const CopyEmail = ({ text = 'email', className = '' }) => {
	const [showToast, setShowToast] = useState(false);

	const handleEmailClick = (e: React.MouseEvent) => {
		e.preventDefault();
		navigator.clipboard.writeText('y.abouelomoum09@gmail.com');
		setShowToast(true);
		setTimeout(() => setShowToast(false), 2000);
	};

	return (
		<div className={className}>
			<a
				onClick={handleEmailClick}
				className="hover:underline cursor-pointer">
				{text}
			</a>

			<Toast message="email copied to clipboard!" isVisible={showToast} />
		</div>
	);
};

export default CopyEmail;
