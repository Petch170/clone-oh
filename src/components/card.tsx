'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

type CardImg = {
	id: string;
	url: string;
	alt: string;
	width: number;
	height: number;
};

const Card = () => {
	const [cardImage, setCardImage] = useState<CardImg[]>([]);

	useEffect(() => {
		fetch('https://api.thecatapi.com/v1/images/search?limit=10')
			.then((res) => res.json())
			.then((data: CardImg[]) => {
				setCardImage(data);
			});
	}, []);

	//   grid grid-cols-1 lg:grid-cols-2 translate-x-0 translate-y-0 scale-100
	return (
		<div className=" grid grid-cols-1 lg:grid-cols-2 gap-6 lg:m-10 2xl:mx-20">
			{cardImage.map((item) => (
				<div
					key={item.id}
					className="relative aspect-[1/1] rounded-xl overflow-hidden "
				>
					<div className=" absolute inset-0">
						<Image
							// src="/test.jpg"
							src={item.url}
							alt={`Image ${item.id}`}
							width={item.width}
							height={item.height}
							className=" rounded-3xl pt-3 object-cover w-full h-full object-center "
						/>
					</div>
				</div>
			))}
		</div>
	);
};
export default Card;
