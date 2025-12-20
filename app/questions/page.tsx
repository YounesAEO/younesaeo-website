import QuestionItem from '../components/question-item';

const questions = [
	{
		content: 'what you wish you did more with people you love ?',
	},
	{
		content:
			'if this was your last year and you had to make yourself happy, what would you do ?',
	},
	{
		content:
			"if you had a billion dollars in the bank, what would you actually work on ? why can't you do it now ?",
	},
	{
		content:
			'if you had to introduce yourself without mentioning your occupation, your ethnicity, your religion, where you grew up, what your hobbies are, and all those superficial markers we use in our day to day, how would you describe yourself ?',
	},
	{
		content: 'what would heaven be like for you ?',
	},
	{
		content: "what is one thing you didn't expect to learn this year ?",
	},
	{
		content:
			"when you have time to wonder what's a thought or idea you regularly find yourself going back to because you find it so interesting ?",
	},
	{
		content:
			'what are the things in your life that you are most afraid of doing ?',
	},
	{
		content:
			'have you ever lost a love thought it would last ? what happened ?',
	},
	{
		content: 'what do you feel is missing in your life right now ?',
	},
] as const;
const QuestionsPage = () => {
	return (
		<section className="mb-16">
			<h1 className="text-4xl font-bold mb-8">Questions I love to ask</h1>
			<div className="bg-gradient-to-r from-orange-100 to-transparent p-4 mb-8 rounded">
				<p className="text-lg">
					Tim Ferriss once said: <br />
					<i className="font-bold">
						“If you want confusion and heartache, ask vague
						questions. If you want uncommon clarity and results, ask
						uncommonly clear questions. Often, all that stands
						between you and what you want is a better set of
						questions.”
					</i>
					<br />
					<br />
					Some collect vintage cars. Others collect watches. I collect
					great questions like they're infinity stones. These are my
					current top 10 questions.
				</p>
			</div>
			<ul className="space-y-4 text-lg">
				{questions.map((question, index) => (
					<li key={index}>
						<QuestionItem question={question.content} />
					</li>
				))}
			</ul>
		</section>
	);
};

export default QuestionsPage;
