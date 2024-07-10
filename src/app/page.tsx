import Contact from '@/components/contact';
import Hero from '@/components/hero';
import Image from 'next/image';

export default function Home() {
	return (
		<main>
			<Hero />
			<Contact isHomePage={true} />
		</main>
	);
}
