"use client";

import { useState } from "react";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Review from "./Review";
import ProgressBar from "./ProgressBar";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    ssn: "",
    address: "",
    country: "",
    phone: "",
    idFile: null,
    proofFile: null,
  });

  const next = () => setStep((prev) => prev + 1);
  const back = () => setStep((prev) => prev - 1);
  const updateForm = (data: any) => setFormData({ ...formData, ...data });

  return (
    <div>
      <ProgressBar currentStep={step} />
      {step === 1 && <Step1 next={next} data={formData} update={updateForm} />}
      {step === 2 && <Step2 next={next} back={back} data={formData} update={updateForm} />}
      {step === 3 && <Step3 next={next} back={back} data={formData} update={updateForm} />}
      {step === 4 && <Review back={back} data={formData} />}
    </div>
  );
};

export default MultiStepForm;