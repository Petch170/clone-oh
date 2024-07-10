'use client';

import { useForm } from 'react-hook-form';
import { useFormState } from './formContext';

type Companysize =
	| 'only me'
	| '1-5 employees'
	| '6-10 employees'
	| '11-100 employees'
	| 'over 100 employees';

type FormData = {
	companysize: Companysize;
};

const Companysize = () => {
	const { onHandleBack, onHandleNext, setFormData, formData } = useFormState();

	const { register, handleSubmit } = useForm<FormData>({
		defaultValues: {
			companysize: formData.companysize as Companysize,
		},
	});

	const companysizes: Companysize[] = [
		'only me',
		'1-5 employees',
		'6-10 employees',
		'11-100 employees',
		'over 100 employees',
	];

	const onHandleSubmit = (data: FormData) => {
		setFormData((prev) => ({ ...prev, ...data }));
		// console.log({ data });
		onHandleNext();
	};

	return (
		<form onSubmit={handleSubmit(onHandleSubmit)}>
			<h2 className="font-bold text-base">what is your company size?</h2>
			<p className="mb-3 text-sm">Please select one of following option:</p>
			{companysizes.map((companysize) => (
				<div
					key={companysize}
					className="companysize-option border border-[#dbe2eb] py-3 my-2 bg-[#f8fafc] rounded-lg w-full"
				>
					<input
						className="ml-4 mr-2"
						type="radio"
						style={{ width: '15px', height: '15px' }}
						id={companysize}
						value={companysize}
						{...register('companysize')}
						required
					/>
					<label htmlFor={companysize} className="text-sm text-center">
						{companysize}
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
					Next
				</button>
			</div>
		</form>
	);
};

export default Companysize;
