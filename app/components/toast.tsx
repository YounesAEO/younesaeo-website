export function Toast({
	message,
	isVisible,
}: {
	message: string;
	isVisible: boolean;
}) {
	if (!isVisible) return null;

	return (
		<div className="fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-md shadow-lg transition-opacity duration-300">
			{message}
		</div>
	);
}
