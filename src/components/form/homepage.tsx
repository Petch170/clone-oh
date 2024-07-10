'use client';

import { useForm } from 'react-hook-form';
import { useFormState } from './formContext';

const Homepage = () => {
	const { onHandleNext } = useFormState();
	return (
		<form onSubmit={onHandleNext}>
			<h2 className="font-bold">Wellcome!</h2>
			<p>Thanks for providing your feedback - let&apos;s go!</p>

			<div className="flex flex-row items-center justify-start gap-2 mt-6 mb-16">
				<div className=" border-[3px] border-[rgb(100,116,139)] bg-white rounded-lg p-[2px] ">
					<button
						type="submit"
						className=" h-11 px-4 bg-[#64748b] text-white rounded-md  "
					>
						Next
					</button>
				</div>

				<div>
					<p className=" items-center justify-center text-center text-sm">
						{' '}
						Press Enter &#8629;
					</p>
				</div>
			</div>
		</form>
	);
};

export default Homepage;
