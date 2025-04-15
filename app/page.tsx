import OldLink from './components/old-link';

export default function Home() {
	return (
		<section className="mb-16">
			<h1 className="text-4xl font-bold mb-8">Hi I'm younes.</h1>
			<h2 className="text-lg bg-gradient-to-r from-orange-100 to-transparent p-4 mb-8 rounded">
				I'm just a guy who likes building stuff I don't understand or
				that I wish existed
			</h2>

			<div className="space-y-6 text-lg">
				<h2 className="text-2xl font-bold mt-12 mb-6">
					my life story:
				</h2>
				<div className="space-y-8">
					<div>
						<h3 className="font-medium">
							<span className="bg-orange-100 decoration-orange-300 decoration-4 underline">
								ages 2-10:
							</span>{' '}
							The Boogers Era.
						</h3>
						<p>
							Not much to report here. Just boogers and some
							childhood trauma.
						</p>
					</div>

					<div>
						<h3 className="font-medium">
							<span className="bg-orange-100 decoration-orange-300 decoration-4 underline">
								ages 10-18:
							</span>{' '}
							The Good Boy Era.
						</h3>
						<p>
							Studied hard, got good grades. Did alot of public
							speaking to impress girls. It didn't work.
						</p>
					</div>

					<div>
						<h3 className="font-medium">
							<span className="bg-orange-100 decoration-orange-300 decoration-4 underline">
								ages 18-22:
							</span>{' '}
							The Learning Era.
						</h3>
						<p>
							Got into computer science. Learned to code. Started
							building very shitty apps and got interested in
							startups.
						</p>
					</div>
					<div>
						<h3 className="font-medium">
							<span className="bg-orange-100 decoration-orange-300 decoration-4 underline">
								ages 22-26:
							</span>{' '}
							The Builder Era.
						</h3>
						<p>
							Got better at building stuff. Worked for one of{' '}
							<OldLink
								href="https://lastartupstation.co"
								text="the biggest startup incubators"
							/>{' '}
							in africa. Moved to Paris. Now, I'm working for{' '}
							<OldLink
								href="https://choosemycompany.com"
								text="ChooseMyCompany"
							/>{' '}
							and building cool stuff.
						</p>
					</div>
					<div>
						<h3 className="font-medium">
							<span className="bg-orange-100 decoration-orange-300 decoration-4 underline">
								ages 26-36:
							</span>{' '}
							The Next Era.
						</h3>
						<p>
							Get the body of christian bale in the dark knight.
							Make shit ton of money. Get a dog and do some{' '}
							<OldLink text="side quests" href={'/side-quests'} />
							.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
