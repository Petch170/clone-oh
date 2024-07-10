'use client';

import { useForm } from 'react-hook-form';
import { useFormState } from './formContext';

type Role =
	| 'Founder'
	| 'Executive'
	| 'Product Manager'
	| 'Product Owner'
	| 'Software Engineer';

type FormData = {
	role: Role;
};
const Rolecompany = () => {
	const { onHandleNext, setFormData, formData } = useFormState();

	const { register, handleSubmit } = useForm<FormData>({
		defaultValues: {
			role: formData.role as Role,
		},
	});

	const roles: Role[] = [
		'Founder',
		'Executive',
		'Product Manager',
		'Product Owner',
		'Software Engineer',
	];

	const onHandleSubmit = (data: FormData) => {
		setFormData((prev) => ({ ...prev, ...data }));
		onHandleNext();
		// console.log({ data });
	};

	return (
		<form onSubmit={handleSubmit(onHandleSubmit)}>
			<h2 className=" font-bold text-base">What is your role?</h2>
			<p className="mb-3 text-sm">Please select one of following option:</p>

			{roles.map((role) => (
				<div
					key={role}
					className="role-option border border-[#dbe2eb] py-3 my-2 bg-[#f8fafc] rounded-lg w-full "
				>
					<input
						className=" ml-4 mr-2 "
						type="radio"
						style={{ width: '15px', height: '15px' }}
						id={role}
						value={role}
						{...register('role')}
						required
					/>

					<label htmlFor={role} className="text-sm text-center">
						{role}
					</label>
				</div>
			))}

			<div className="flex justify-end pt-5">
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

export default Rolecompany;
