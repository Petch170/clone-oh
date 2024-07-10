import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Footer = () => {
	return (
		<footer className=" flex flex-col px-10 pt-5 pb-5 lg:flex-row lg:px-10 lg:py-10 lg:justify-between justify-center items-center text-sm font-normal">
			{/* left */}

			<div className=" flex justify-center items-center flex-col lg:flex-row">
				<Image
					src="/star.svg"
					alt="logo"
					width={20}
					height={20}
					className=" animate-spin text-center "
				/>

				<p>&copy; Oil Harris 2023</p>
			</div>

			{/* right */}
			<div className=" flex gap-2 ">
				<Link href="https://x.com/olvhrs"> Twitter</Link>
				<Link href="https://www.linkedin.com/in/oliiharris/">Linkedin</Link>
				<Link href="mailto:oli@oh.studio">Mail</Link>
			</div>
		</footer>
	);
};

export default Footer;
