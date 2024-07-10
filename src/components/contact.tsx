import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import Footer from './footer';

type Props = {
	isHomePage?: boolean;
};

const Contact = ({ isHomePage = false }: Props) => {
	const contactClass = isHomePage
		? 'h-[50vh] p-5 flex flex-col justify-center items-center overflow-hidden '
		: 'h-[85vh]  flex flex-col justify-center items-center overflow-hidden ';

	const textClass = isHomePage
		? 'text-center py-2 text-3xl lg:text-[38px] font-normal -tracking-[.2px] animate-fadeInUp'
		: 'text-center text-3xl lg:text-7xl font-normal -tracking-[.2px] animate-fadeInUp';

	return (
		<div className="">
			<div className={contactClass}>
				{/* <div className=" -tracking-[.2px] "></div> */}
				<div className={`${textClass} `}> Let&apos;s work togetther.</div>
				<Link
					href="mailto:oli@oh.studio"
					className={` ${textClass}  text-[#7f7f7f]`}
				>
					Get in touch.
				</Link>
			</div>
			<Footer />
		</div>
	);
};

export default Contact;
