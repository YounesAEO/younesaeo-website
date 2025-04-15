'use client';

import { useState } from 'react';
import { AnswerModal } from './answer-modal';
import { Toast } from './toast';
import emailjs from '@emailjs/browser';

const QuestionItem = ({ question }: { question: string }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [showSuccess, setShowSuccess] = useState(false);
	const [showError, setShowError] = useState(false);
	const [showCopyToClipBoard, setShowCopyToClipBoard] = useState(false);

	const onSave = (answer: string) => {
		const templateParams = {
			question: question,
			answer: answer,
		};

		emailjs
			.send(
				'service_95jgtlj',
				'template_a34lcgv',
				templateParams,
				'oiYlucZGizUgrcjeA'
			)
			.then(() => {
				setShowSuccess(true);
				setTimeout(() => setShowSuccess(false), 2000);
			})
			.catch(() => {
				setShowError(true);
				setTimeout(() => {
					setShowError(false);
					navigator.clipboard.writeText('y.abouelomoum09@gmail.com');
					setShowCopyToClipBoard(true);
					setTimeout(() => setShowCopyToClipBoard(false), 4000);
				}, 2000);
			})
			.finally(() => setIsModalOpen(false));
	};
	return (
		<>
			<div
				onClick={() => setIsModalOpen(true)}
				className="text-left hover:text-orange-500 hover:underline transition-colors cursor-pointer">
				<span>* </span>
				{question}
			</div>
			<AnswerModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				question={question}
				onSave={onSave}
			/>
			<Toast message="Thanks for the email!" isVisible={showSuccess} />
			<Toast
				message="For some reason the email wasn't sent :("
				isVisible={showError}
			/>
			<Toast
				message="Copied email to clipboard, if you still have some willpower ;)"
				isVisible={showCopyToClipBoard}
			/>
		</>
	);
};

export default QuestionItem;
