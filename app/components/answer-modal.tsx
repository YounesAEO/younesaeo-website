'use client';

import { useState, useRef, useEffect } from 'react';
import { X } from 'lucide-react';

interface AnswerModalProps {
	isOpen: boolean;
	onClose: () => void;
	question: string;
	onSave: (answer: string) => void;
}

export function AnswerModal({
	isOpen,
	onClose,
	question,
	onSave,
}: AnswerModalProps) {
	const [answer, setAnswer] = useState('');
	const modalRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}

		return () => {
			document.body.style.overflow = 'auto';
		};
	}, [isOpen]);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				modalRef.current &&
				!modalRef.current.contains(event.target as Node)
			) {
				onClose();
			}
		};

		if (isOpen) {
			document.addEventListener('mousedown', handleClickOutside);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isOpen, onClose]);

	if (!isOpen) return null;

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (answer.trim()) {
			onSave(answer);
			setAnswer('');
			onClose();
		}
	};

	return (
		<div className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center z-50">
			<div
				ref={modalRef}
				className="bg-white border border-gray-200 p-6 rounded w-full max-w-md mx-4">
				<div className="flex justify-between items-center mb-4">
					<h3 className="text-lg font-mono">Hit me up your answer</h3>
					<button
						onClick={onClose}
						className="p-1 hover:bg-gray-100 rounded-full">
						<X size={18} />
					</button>
				</div>

				<p className="mb-4 font-mono">{question}</p>

				<form onSubmit={handleSubmit}>
					<textarea
						value={answer}
						onChange={(e) => setAnswer(e.target.value)}
						className="w-full p-3 border border-gray-300 rounded font-mono min-h-[120px] mb-4 focus:outline-none focus:ring-1 focus:ring-gray-400"
						placeholder="Type your answer here..."
					/>

					<div className="flex justify-end gap-2">
						<button
							type="button"
							onClick={onClose}
							className="px-4 py-2 border border-gray-300 rounded font-mono hover:bg-gray-50">
							Cancel
						</button>
						<button
							type="submit"
							className="px-4 py-2 bg-orange-400 text-white rounded font-mono hover:bg-orange-500 transition-colors">
							Save
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
