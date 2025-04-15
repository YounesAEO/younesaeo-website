export interface Question {
	text: string;
	category: string;
	context?: string;
}

export const questions: Question[] = [
	{
		text: "What's the most beautiful thing you've ever seen?",
		category: 'Life',
		context:
			"Beauty can be found in unexpected places. I'm curious about what moves you.",
	},
	{
		text: "What's a belief you had that changed completely?",
		category: 'Growth',
		context: 'Our perspectives evolve as we grow. Share your journey.',
	},
	{
		text: "What would you do if you knew you couldn't fail?",
		category: 'Dreams',
		context: 'Sometimes our biggest limitations are our fears.',
	},
	// Add more questions here
];
