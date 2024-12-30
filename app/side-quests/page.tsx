import { Nav } from '../components/nav';
import { Footer } from '../components/footer';
import OldLink from '../components/old-link';

export default function SideQuests() {
	return (
		<>
			<Nav />
			<section className="mb-16">
				<h1 className="text-4xl font-bold mb-8">
					Here is the list of things I wanna do before I die.
				</h1>
				<div className="bg-gradient-to-r from-orange-100 to-transparent p-4 mb-8 rounded">
					<p className="text-lg">
						Just like video games, these are things that aren't
						necessarily bringing me closer to the big goals. But,
						I'd be genuinely sad if I end up not doing them. These
						are usually things that I saw someone else do and
						thought{' '}
						<span className="font-bold">
							"HELL YEAH, THIS IS SICK !"
						</span>
					</p>
				</div>
				<ul className="space-y-4 text-lg">
					<li>
						* play the twelve variations of mozart's{' '}
						<OldLink
							text="twinkle twinkle little star"
							href="https://www.youtube.com/watch?v=hCKBl-TpRzc&ab_channel=Rousseau"
						/>
					</li>
					<li>* fly a plane</li>
					<li>* learn swimming (the right way)</li>
					<li>* skydive</li>
					<li>
						* bungee jump in{' '}
						<OldLink
							text="switzerland"
							href="https://www.google.com/maps/place/Pont+suspendu+de+Niouc+-+Pont+de+l'araign%C3%A9e/@46.2642059,7.5564541,17z/data=!3m1!4b1!4m6!3m5!1s0x478f21fcf605c1df:0xd5bbea1fb1c58a73!8m2!3d46.2642059!4d7.5564541!16s%2Fg%2F112yf76x6?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
						/>
					</li>
					<li>* host a ppt night</li>
					<li>* throw karaoke party for spacetoon songs only</li>
					<li>* do a proper backflip</li>
					<li>* stand on both hands</li>
					<li>* juggle with 3 balls</li>
					<li>* play a poker tournament</li>
					<li>* shoot a real gun</li>
					<li>* finish a marathon under 3h30</li>
					<li>* learn to dance salsa</li>
					<li>* finish an ironman under 12h</li>
					<li>
						* shoot an RPG in{' '}
						<OldLink
							text="cambodia"
							href="https://www.getyourguide.com/phnom-penh-l273/cambodia-shooting-range-phnom-penh-sightseeing-tour-t686055/?ranking_uuid=398cca4a-276e-4d9e-8637-4bc52a7d65fc"
						/>
					</li>
					<li>* ride a bicycle from france to morocco</li>
					<li>* have a coffee with 100 strangers</li>
					<li>
						* ski from{' '}
						<OldLink
							text="l'aiguille rouge"
							href="https://g.co/kgs/hxXUWUr"
						/>
					</li>
					<li>
						* watch all{' '}
						<OldLink
							text="best picture award winners"
							href="https://www.imdb.com/list/ls009480135/"
						/>
					</li>
					<li>* skinny dip</li>
					<li>
						* scuba dive in the{' '}
						<OldLink
							text="great barrier reef"
							href="https://maps.app.goo.gl/tHFPYnaUgLXjouZ9A"
						/>
					</li>
					<li>* finish my 100 book list</li>
					<li>* travel with a stranger</li>
					<li>* do an improv class</li>
				</ul>
			</section>
			<Footer />
		</>
	);
}
