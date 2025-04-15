import QuestionItem from '../components/question-item';

const questions = [
	{
		content: 'what you wish you did more with people you love ?',
	},
	{
		content:
			'if this was your last year and you had to make yourself happy, what would you do?',
	},
	{
		content:
			"if you had a billion dollars in the bank, what would you actually work on? why can't you do it now?",
	},
	{
		content:
			"what was the last thing that didn't let you sleep for nights ?",
	},
	{
		content:
			'what are the things in your life that you are most afraid of doing ?',
	},
	{
		content: 'what are you interested in lately ?',
	},
	{
		content: 'what have you been thinking about lately ?',
	},
	{
		content:
			'what are the things in your life that you are most afraid of doing ?',
	},
	{
		content:
			'have you ever lost a love thought it would last ? What happened ?',
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
					People collect cars, watches, stamps. I like collecting
					questions. Here are the top 10 questions I like asking
					recently.
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
