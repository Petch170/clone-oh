import Link from 'next/link';
import { useRouter } from 'next/navigation';

type Props = {
	href: string;
	children: React.ReactNode;
	active: boolean;
};
const Navlink = ({ href, children, active }: Props) => {
	const router = useRouter();

	return (
		<Link href={href}>
			<a
				href={href}
				className={`rounded-full px-6 py-2 text-sm content-center font-normal transition-colors duration-200 text-black ${
					active ? 'bg-white' : ''
				}`}
			>
				{children}
			</a>
		</Link>
	);
};

export default Navlink;
