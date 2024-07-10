import Companysize from './companysize';
import { useFormState } from './formContext';
import Hearfirst from './hearfirst';
import Homepage from './homepage';
import Rolecompany from './rolecompany';
import { SummaryForm } from './summatyform';
import ThankyouPage from './Thankyou';

type Props = {
	currentStep: number;
};

const steps = [
	'Homepage',
	'Rolecompany',
	'Companysize',
	'Hearfirst',
	'ThankyouPage',
	'SummaryForm',
];

const ProgressBar = ({ currentStep }: Props) => {
	const totalSteps = steps.length - 2;
	const activeSteps = Math.min(currentStep, totalSteps);

	return (
		<div className="w-full bg-gray-200 rounded-full h-2 mt-4">
			<div className="flex h-full">
				{steps.slice(0, totalSteps).map((stepName, i) => (
					<div
						key={stepName}
						className={`h-full transition-all duration-300 ease-in-out ${
							i < activeSteps ? 'bg-[#64748b]' : 'bg-transparent'
						} ${i === 0 ? 'rounded-l-full' : ''} ${
							i === totalSteps - 1 ? 'rounded-r-full' : ''
						}`}
						style={{ width: `${100 / totalSteps}%` }}
					/>
				))}
			</div>
		</div>
	);
};

export const FormStep = () => {
	const { step } = useFormState();

	const showProgressBar = step < 5;
	return (
		<div className="w-full max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
			<div className="mb-4">
				{(() => {
					switch (step) {
						case 1:
							return <Homepage />;
						case 2:
							return <Rolecompany />;
						case 3:
							return <Companysize />;
						case 4:
							return <Hearfirst />;
						case 5:
							return <ThankyouPage />;
						case 6:
							return <SummaryForm />;
						default:
							return null;
					}
				})()}
			</div>
			{showProgressBar && <ProgressBar currentStep={step} />}
		</div>
	);
};
