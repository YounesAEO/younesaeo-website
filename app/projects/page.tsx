'use client';
import { useState } from 'react';
import { ArrowUpDown, ExternalLink } from 'lucide-react';

const projects = [
	{
		title: 'ChooseMyCompany',
		description:
			"This is my current role, where I'm developing GenAI features to help companies gain valuable insights about their clients and collaborators.",
		tech: ['Symfony', 'K8s', 'Vue.js', 'MySQL'],
		type: 'Work',
		link: 'https://choosemycompany.com/',
	},
	{
		title: 'Lgarage',
		description:
			'A platform that helps users book a nearby mechanic. Still cooking this one.',
		tech: ['Next.js', 'TypeScript', 'MongoDB'],
		type: 'Personal',
		link: 'https://l-garage.vercel.app/',
	},
	{
		title: 'Weel',
		description:
			"Took the questions Mark Mansion asks on his newsletter and turned them into a little fun spinning wheel. Later on, I added the 36 questions to fall in love to impress a crush. I can tell you that shit doesn't work.",
		tech: ['Next.js', 'TypeScript', 'MongoDB'],
		type: 'Personal',
		link: 'https://www.weel.lol/',
	},
	{
		title: 'Say Hi',
		description:
			'Got interested in blockchain for a while. So made a small solidity app.',
		tech: ['React', 'Solidity', 'Hardhat', 'Ethers.js'],
		type: 'Personal',
		link: 'https://github.com/YounesAEO/sayhi-contract',
	},
	{
		title: 'CSRNet Research Project',
		description:
			'Implemented a convolutional neural network architecture to generate density maps of dense cell images.',
		tech: ['PyTorch'],
		type: 'School',
		link: 'https://github.com/YounesAEO/dense-cell-counting',
	},
	{
		title: 'Travel Log App',
		description: 'Still in my maps era. Made a little app to log trips.',
		tech: ['HTML', 'Express', 'MongoDB', 'MapBox API'],
		type: 'Personal',
		link: 'https://github.com/YounesAEO/travel-log-app',
	},
	{
		title: 'Google Maps Clone',
		description:
			'First time using MapBox and was trying to test how it works.',
		tech: ['HTML', 'JavaScript'],
		type: 'Personal',
		link: 'https://github.com/YounesAEO/google-maps-clone',
	},
	{
		title: 'StartupSquare',
		description:
			'Worked with a small team of engineers to build the first version of StartupSquare. A platform that connects african startups with investors and innovation hubs. I was mainly building features related to the application workflow.',
		tech: ['Next.js', 'TypeScript', 'Express', 'MongoDB'],
		type: 'Work',
		link: 'https://www.startupsquare.co/',
	},
	{
		title: 'African Startups Webscraper',
		description:
			"This was part of a larger project for https://www.lastartupstation.co/ to build an ETL pipeline to enrich the company's CRM",
		tech: ['React', 'Solidity', 'Hardhat', 'Ethers.js'],
		type: 'Work',
		link: 'https://github.com/YounesAEO/webscraper',
	},
	{
		title: 'Traffic Vision',
		description:
			'End-to-end car accident detection system powered by YOLOv3 algorithm for real-time object detection.',
		tech: ['Flask API', 'Darknet', 'YOLOv3', 'Firebase', 'TensorFlow'],
		type: 'School',
		link: 'https://github.com/YounesAEO/yolov3-accident-detection',
	},
	{
		title: 'SwapB Mobile App',
		description:
			'A hybrid mobile application for book exchange based on IONIC 4 framework.',
		tech: ['Ionic', 'Angular', 'TypeScript', 'Cordova', 'Node.js'],
		type: 'School',
		link: null,
	},
];

export default function Projects() {
	const [isNewestFirst, setIsNewestFirst] = useState(true);

	const sortedProjects = isNewestFirst ? projects : [...projects].reverse();

	return (
		<section className="mb-16">
			<div className="flex justify-between items-center mb-8">
				<h1 className="text-4xl font-bold">Projects</h1>
				<button
					onClick={() => setIsNewestFirst(!isNewestFirst)}
					className="flex items-center gap-2 px-4 py-2 bg-orange-100 rounded hover:bg-orange-200 transition-colors">
					<ArrowUpDown className="h-4 w-4" />
					Sort by {isNewestFirst ? 'oldest' : 'newest'} first
				</button>
			</div>

			<div className="bg-gradient-to-r from-orange-100 to-transparent p-4 mb-8 rounded">
				<p className="text-lg">
					List of stuff I did or I'm still doing. I just put
					everything in here. A reminder of all the things I built or
					participated in.
				</p>
			</div>

			<div className="space-y-12">
				{sortedProjects.map((project, index) => (
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
						<p className="text-sm text-gray-600 mb-4">
							{project.type}
						</p>
						<p className="mb-4">{project.description}</p>
						<div className="flex flex-wrap gap-2">
							{project.tech.map((tech, techIndex) => (
								<span
									key={techIndex}
									className="bg-gray-100 px-3 py-1 text-sm rounded">
									{tech}
								</span>
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
