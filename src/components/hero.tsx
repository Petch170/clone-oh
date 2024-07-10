import React from 'react';
import Card from './card';

const Hero = () => {
	return (
		<div className=" min-h-screen flex flex-col">
			<div className=" h-[65vh] lg:h-[80vh] mx-5 md:mx-10 :mt-10 flex items-center justify-center flex-col animate-fadeInUp">
				<h1 className=" text-center font-normal text-wrap -tracking-[.2px] text-4xl lg:text-5xl xl:text-[75px] xl:px-[350px]">
					{' '}
					A brand and product designer working with clients globally
				</h1>

				<ul className=" hidden lg:flex lg:px-2 lg:mt-10 lg:gap-2 ">
					<li className="rounded-full  px-4 py-2 text-xs">Expertise</li>
					<li className="rounded-full bg-[#e8e5e480] px-4 py-2 text-xs">
						Branding
					</li>
					<li className="rounded-full bg-[#e8e5e480] px-4 py-2 text-xs">
						Product
					</li>
					<li className="rounded-full bg-[#e8e5e480] px-4 py-2 text-xs">
						Design Systems
					</li>
				</ul>
			</div>

			<div className="mx-5 mt-5 lg:mx-10 lg:mt-10">
				<Card />
			</div>
		</div>
	);
};

export default Hero;
