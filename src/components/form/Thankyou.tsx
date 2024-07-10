import React, { useEffect } from 'react';
import { useFormState } from './formContext';
import Image from 'next/image';

const ThankyouPage = () => {
	const { onHandleNext } = useFormState();

	useEffect(() => {
		const timer = setTimeout(() => {
			onHandleNext();
		}, 3000);
		return () => {
			clearTimeout(timer);
		};
	}, [onHandleNext]);

	return (
		<div className="flex justify-center items-center flex-col">
			<div className=" flex flex-col justify-center items-center">
				<Image
					src="/bx-check-circle.svg"
					alt="check"
					width={100}
					height={100}
				/>
				<span className="mb-5 inline-block h-1 w-20 rounded-full bg-[#64748b]" />
			</div>
			<div className="flex flex-col justify-center items-center">
				<h2 className="font-bold">Thank you!</h2>
				<p className="text-[#64748b] font-semibold text-sm pt-2">
					We appreciate your feedback.
				</p>
			</div>
		</div>
	);
};

export default ThankyouPage;
