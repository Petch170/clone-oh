'use client';
import {
	createContext,
	Dispatch,
	SetStateAction,
	useContext,
	useState,
} from 'react';

type Props = {
	children: React.ReactNode;
};

type FormStep = {
	onHandleNext: () => void;
	onHandleBack: () => void;
	step: number;
	formData: FormData;
	setFormData: React.Dispatch<React.SetStateAction<FormData>>;
};

type FormData = {
	role: string;
	companysize: string;
	hear: string;
};

const FormContext = createContext<FormStep>({
	onHandleBack: () => {},
	onHandleNext: () => {},
	step: 1,
	formData: {
		role: '',
		companysize: '',
		hear: '',
	},
	setFormData: () => {},
});

export const FormProvider = ({ children }: Props) => {
	const [step, setStep] = useState(1);
	const [formData, setFormData] = useState<FormData>({
		role: '',
		companysize: '',
		hear: '',
	});

	const onHandleNext = () => {
		setStep((prevValue) => prevValue + 1);
	};
	const onHandleBack = () => {
		setStep((prevValue) => prevValue - 1);
	};

	console.log({ formData });

	return (
		<FormContext.Provider
			value={{ onHandleBack, onHandleNext, step, formData, setFormData }}
		>
			{children}
		</FormContext.Provider>
	);
};

export const useFormState = () => {
	return useContext(FormContext);
};
