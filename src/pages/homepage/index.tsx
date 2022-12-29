import { createContext, useState } from "react";
import App from "../../App";
import { ButtonComponent } from "../../components/button";
import { SingleSelect } from "../../components/singleSelect";
import { StepperComponent } from "../../components/stepper";
import { TextInput } from "../../components/textInput";

const stepperSteps = ["Step1", "Step2", "Step3"];

const genderSelectItems = [
  { label: "Male", value: "M" },
  { label: "Female", value: "F" },
];

export const HomePage = () => {
  const AppContext = createContext(null);
  const [activeStep, setActiveStep] = useState(0);

  const handleChange = () => {};

  const handleNextButtonClick = () => {
    setActiveStep((activeStep) => activeStep + 1);
  };

  return (
    // <AppContext>
    <div>
      <div>
        <StepperComponent steps={stepperSteps} activeStep={activeStep} />
      </div>
      <div style={{ maxWidth: 300 }}>
        <TextInput label="First Name" onChange={handleChange} />
        <TextInput label="Middle Name" onChange={handleChange} />
        <TextInput label="Last Name" onChange={handleChange} />
        <SingleSelect label="Gender" menuItems={genderSelectItems} />
      </div>
      <div>
        <ButtonComponent label="Next" onClick={handleNextButtonClick} />
      </div>
    </div>
    // </AppContext>
  );
};
