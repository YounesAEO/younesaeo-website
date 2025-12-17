'use client';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

const wrappers = [
	{
		title: 'Hero Timeline',
		description:
			"Drop a name of a badass founder and get a timeline of their life. It's like a Wikipedia page, but cooler.",
		link: 'https://herotimeline.com/',
	},
	{
		title: 'AiMongus',
		description:
			"4 crewmates, 1 imposter. Except, all players are AIs. Watch the chaos unfold as they try to figure out who's sus.",
		link: 'https://aimongus.vercel.app/',
	},
];

export default function Wrappers() {
	return (
		<section className="mb-16">
			<div className="flex justify-between items-center mb-8">
				<h1 className="text-4xl font-bold">Wrappers</h1>
			</div>

			<div className="bg-gradient-to-r from-orange-100 to-transparent p-4 mb-8 rounded">
				<p className="text-lg">
					Every product you've ever used is a wrapper. Netflix is an
					AWS wrapper. Gmail is a SMTP wrapper. Amazon is a database
					wrapper. I am actually nothing but a code wrapper. A dream
					come true :)
					<br />
					<Image
						src="/wrapper.png"
						alt="Wrapper"
						width={400}
						height={400}
						className="mt-4 self-center mx-auto"
					/>
					<br />
					This is where I put wrappers I wrapped.
				</p>
			</div>

			<div className="space-y-12">
				{wrappers.map((project, index) => (
					<div key={index} className="border-b pb-8">
						<div className="flex items-center gap-2 mb-2">
							<h2 className="text-2xl font-bold">
								{project.title}
							</h2>
							{project.link && (
								<a
									href={project.link}
									target="_blank"
									rel="noopener noreferrer"
									className="hover:text-orange-500 transition-colors">
									<ExternalLink className="h-5 w-5" />
								</a>
							)}
						</div>
						<p className="mb-4">{project.description}</p>
					</div>
				))}
			</div>
		</section>
	);
}
