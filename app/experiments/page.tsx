import Link from 'next/link';

const posts = [
	{
		id: 'motorbike-begins',
		title: 'On becoming a motorbike rider',
		excerpt:
			'From a silly challenge in late night party to my first motorbike trip in Morocco...',
		date: '2023-12-15',
		readTime: '5 min read',
	},
];

export default function Experiments() {
	return (
		<section className="mb-16">
			<h1 className="text-4xl font-bold mb-8">Experiments</h1>
			<div className="space-y-12">
				{posts.map((post) => (
					<article key={post.id} className="border-b pb-8">
						<h2 className="text-2xl font-bold mb-2">
							{post.title}
						</h2>
						<div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
							<time>{post.date}</time>
							<span>·</span>
							<span>{post.readTime}</span>
						</div>
						<p>{post.excerpt}</p>
						<Link
							href={`/writings/${post.id}`}
							className="mt-4 inline-block text-sm font-medium hover:underline">
							Read more →
						</Link>
					</article>
				))}
			</div>
		</section>
	);
}
