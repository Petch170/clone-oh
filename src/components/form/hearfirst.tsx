'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useFormState } from './formContext';

type Hear =
	| 'Recommendation'
	| 'Social Media'
	| 'Ads'
	| 'Google Search'
	| 'In a Podcast';

type FormData = {
	hear: Hear;
};

const Hearfirst = () => {
	const { onHandleBack, onHandleNext, setFormData, formData } = useFormState();
	const { register, handleSubmit } = useForm<FormData>({
		defaultValues: {
			hear: formData.hear as Hear,
		},
	});

	const hearItem: Hear[] = [
		'Recommendation',
		'Social Media',
		'Ads',
		'Google Search',
		'In a Podcast',
	];

	const onHandleSubmit = (data: FormData) => {
		setFormData((prev) => ({ ...prev, ...data }));
		onHandleNext();
		console.log({ data });
	};

	return (
		<form onSubmit={handleSubmit(onHandleSubmit)}>
			<h2 className="font-bold text-base">How did you hear about us first?</h2>
			<p className="mb-3 text-sm">Please select one of following option:</p>
			{hearItem.map((hear) => (
				<div
					key={hear}
					className="hearfirst-option role-option border border-[#dbe2eb] py-3 my-2 bg-[#f8fafc] rounded-lg w-full "
				>
					<input
						className="ml-4 mr-2"
						type="radio"
						style={{ width: '15px', height: '15px' }}
						id={hear}
						value={hear}
						{...register('hear')}
						required
					/>
					<label htmlFor={hear} className="text-sm text-center">
						{hear}
					</label>
				</div>
			))}
			<div className="flex justify-between py-3">
				<button
					type="button"
					onClick={onHandleBack}
					className="h-11 px-4 border bg-white text-black rounded-md font-medium"
				>
					Back
				</button>
				<button
					type="submit"
					className="h-11 px-4 bg-[#64748b] text-white rounded-md"
				>
					Finish
				</button>
			</div>
		</form>
	);
};

export default Hearfirst;
