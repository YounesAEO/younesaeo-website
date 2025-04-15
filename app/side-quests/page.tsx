import OldLink from '../components/old-link';

export default function SideQuests() {
	const quests = [
		{
			text: "play the twelve variations of mozart's ",
			link: {
				text: 'twinkle twinkle little star',
				href: 'https://www.youtube.com/watch?v=hCKBl-TpRzc&ab_channel=Rousseau',
			},
		},
		{ text: 'fly a plane' },
		{ text: 'learn swimming (the right way)' },
		{ text: 'skydive' },
		{
			text: 'bungee jump in ',
			link: {
				text: 'switzerland',
				href: "https://www.google.com/maps/place/Pont+suspendu+de+Niouc+-+Pont+de+l'araign%C3%A9e/@46.2642059,7.5564541,17z/data=!3m1!4b1!4m6!3m5!1s0x478f21fcf605c1df:0xd5bbea1fb1c58a73!8m2!3d46.2642059!4d7.5564541!16s%2Fg%2F112yf76x6?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D",
			},
		},
		{ text: 'host a ppt night' },
		{ text: 'throw karaoke party for spacetoon songs only' },
		{ text: 'do a proper backflip' },
		{ text: 'stand on both hands' },
		{ text: 'juggle with 3 balls' },
		{ text: 'play a poker tournament' },
		{ text: 'shoot a real gun' },
		{ text: 'finish a marathon under 3h30' },
		{ text: 'learn to dance salsa' },
		{ text: 'finish an ironman under 12h' },
		{
			text: 'shoot an RPG in ',
			link: {
				text: 'cambodia',
				href: 'https://www.getyourguide.com/phnom-penh-l273/cambodia-shooting-range-phnom-penh-sightseeing-tour-t686055/?ranking_uuid=398cca4a-276e-4d9e-8637-4bc52a7d65fc',
			},
		},
		{ text: 'ride a bicycle from france to morocco' },
		{ text: 'have a coffee with 100 strangers' },
		{
			text: 'ski from ',
			link: {
				text: "l'aiguille rouge",
				href: 'https://g.co/kgs/hxXUWUr',
			},
		},
		{
			text: 'watch all ',
			link: {
				text: 'best picture award winners',
				href: 'https://www.imdb.com/list/ls009480135/',
			},
		},
		{ text: 'skinny dip' },
		{
			text: 'scuba dive in the ',
			link: {
				text: 'great barrier reef',
				href: 'https://maps.app.goo.gl/tHFPYnaUgLXjouZ9A',
			},
		},
		{ text: 'finish my 100 book list' },
		{ text: 'travel with a stranger' },
		{ text: 'do an improv class' },
		{
			text: 'reach 2000 elo in ',
			link: {
				text: 'lichess',
				href: 'https://lichess.org/@/PunisherKira/perf/rapid',
			},
		},
		{
			text: 'reach immortal rank in ',
			link: { text: 'valorant', href: 'https://playvalorant.com/' },
		},
		{
			text: 'live 6 months in a spanish speaking country and learn spanish',
		},
		{
			text: 'reach top 1000 in Monkeytype',
		},
		{
			text: 'build ',
			link: {
				text: 'challenging projects every programmer should try',
				href: 'https://austinhenley.com/blog/challengingprojects.html',
			},
		},
		{
			text: 'build my dream computer',
		},
	];

	return (
		<section className="mb-16">
			<h1 className="text-4xl font-bold mb-8">
				Here is the list of things I wanna do before I die.
			</h1>
			<div className="bg-gradient-to-r from-orange-100 to-transparent p-4 mb-8 rounded">
				<p className="text-lg">
					Just like video games, these are things that aren't
					necessarily bringing me closer to the big goals. But, I'd be
					genuinely sad if I end up not doing them. These are usually
					things that I saw someone else do and thought{' '}
					<span className="font-bold">
						"HELL YEAH, THIS IS SICK !"
					</span>
				</p>
			</div>
			<ul className="space-y-4 text-lg">
				{quests.map((quest, index) => (
					<li key={index}>
						* {quest.text}
						{quest.link && (
							<OldLink
								text={quest.link.text}
								href={quest.link.href}
							/>
						)}
					</li>
				))}
			</ul>
		</section>
	);
}
