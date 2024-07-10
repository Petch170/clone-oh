'use client';
import Link from 'next/link';
import Navlink from './navlink';
import { usePathname } from 'next/navigation';

const Navbar = () => {
	const pathname = usePathname();
	return (
		<header className="flex justify-center items-center w-full pt-5 lg:pt-7 fixed z-50 ">
			<nav className="  rounded-full bg-[#e8e5e480] backdrop-blur-md flex p-1 ">
				{/* <Navlink href="/home" active={router.pathname === "/"}>
          home
        </Navlink> */}
				<div
					className={`rounded-full px-6 py-2 text-sm content-center font-normal transition-colors duration-200 text-black ${
						pathname === '/' ? 'bg-white' : ''
					}`}
				>
					<Link href="/">Home</Link>
				</div>

				<div
					className={`rounded-full px-6 py-2 text-sm content-center font-normal transition-colors duration-200 text-black ${
						pathname === '/profile' ? 'bg-white' : ''
					}`}
				>
					{' '}
					<Link href="/profile">Profile</Link>
				</div>
				<div
					className={`rounded-full px-6 py-2 text-sm content-center font-normal transition-colors duration-200 text-black ${
						pathname === '/contact' ? 'bg-white' : ''
					}`}
				>
					<Link href="/contact">Contact</Link>
				</div>
				<div
					className={`rounded-full px-6 py-2 text-sm content-center font-normal transition-colors duration-200 text-black ${
						pathname === '/form' ? 'bg-white' : ''
					}`}
				>
					<Link href="/form">Form</Link>
				</div>
			</nav>
		</header>
	);
};
export default Navbar;
