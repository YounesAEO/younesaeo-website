import Link from 'next/link';

export async function generateStaticParams() {
	return Object.keys(posts).map((id) => ({ id }));
}

const posts = {
	'clean-architecture': {
		title: 'Clean Architecture in Modern Web Development',
		content:
			'This is a placeholder for the full blog post about Clean Architecture in Modern Web Development.',
		date: '2023-12-15',
		readTime: '5 min read',
	},
	'future-of-computer-vision': {
		title: 'The Future of Computer Vision',
		content:
			'This is a placeholder for the full blog post about The Future of Computer Vision.',
		date: '2023-12-01',
		readTime: '8 min read',
	},
};

export default function BlogPost({ params }: { params: { id: string } }) {
	const post = posts[params.id as keyof typeof posts];

	if (!post) {
		return <div>Post not found</div>;
	}

	return (
		<article className="mb-16">
			<h1 className="text-4xl font-bold mb-4">{post.title}</h1>
			<div className="flex items-center space-x-4 text-sm text-gray-600 mb-8">
				<time>{post.date}</time>
				<span>·</span>
				<span>{post.readTime}</span>
			</div>
			<div className="prose max-w-none">
				<p>{post.content}</p>
			</div>
			<Link
				href="/writings"
				className="mt-8 inline-block text-sm font-medium hover:underline">
				← Back to all posts
			</Link>
		</article>
	);
}
