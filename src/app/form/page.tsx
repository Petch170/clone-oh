'use client';
import Companysize from '@/components/form/companysize';
import { FormProvider } from '@/components/form/formContext';
import { FormStep } from '@/components/form/formstep';
import Hearfirst from '@/components/form/hearfirst';
import Homepage from '@/components/form/homepage';
import Rolecompany from '@/components/form/rolecompany';
import { SummaryForm } from '@/components/form/summatyform';
import ThankyouPage from '@/components/form/Thankyou';
import React, { useState } from 'react';

const FormPage = () => {
	return (
		<div className=" m-auto flex  justify-center items-center min-h-screen ">
			<div className="p-10 w-full rounded-lg  mx-[10%] md:mx-[20%] lg:mx-[30%]">
				{/* <Homepage />
        <Rolecompany />
        <Companysize /> */}
				{/* <ThankyouPage />
        <SummaryForm /> */}
				<FormProvider>
					<FormStep />
				</FormProvider>
			</div>
		</div>
	);
};

export default FormPage;
