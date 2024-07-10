import Image from 'next/image';
import { useFormState } from './formContext';

export const SummaryForm = () => {
	const { formData } = useFormState();
	return (
		<div className=" ">
			<div className=" flex gap-5 my-4">
				<Image src="\bx-check-circle.svg" alt="check" width={20} height={20} />

				<p className=" font-bold text-sm text-[#64748b]">Wellcome Card</p>
			</div>
			<div className="my-4">
				<p className="flex flex-col text-[#64748b] text-sm">
					What is your role?
					<span className=" font-bold text-lg text-[#3d4a5d]">
						{formData.role}
					</span>
				</p>
			</div>
			<div className="my-4">
				<p className="flex flex-col text-[#64748b] text-sm">
					What&apos;s your company size?
					<span className=" font-bold text-lg text-[#3d4a5d]">
						{formData.companysize}{' '}
					</span>
				</p>
			</div>
			<div className="my-4">
				<p className="flex flex-col text-[#64748b] text-sm">
					How did you hear about us first?
					<span className="font-bold text-lg text-[#3d4a5d]">
						{formData.hear}{' '}
					</span>
				</p>
			</div>
			<div>
				<div className="flex gap-5 my-4">
					<Image src="\bx-check-circle.svg" alt="logo" width={20} height={20} />
					<p className="font-bold text-sm text-[#64748b] bg-[#64748b]/10 rounded-lg px-2">
						Completed
					</p>
				</div>
			</div>
		</div>
	);
};
