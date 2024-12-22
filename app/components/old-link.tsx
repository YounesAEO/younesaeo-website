import Link from 'next/link';

interface OldLinkProps {
	href: string;
	text: string;
}

const OldLink = ({ href, text }: OldLinkProps) => {
	return (
		<Link
			href={href}
			className="text-blue-600 hover:text-blue-800 visited:text-purple-600 underline">
			{text}
		</Link>
	);
};

export default OldLink;
