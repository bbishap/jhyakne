import { SelectChangeEvent } from "@mui/material";
import Container from "@mui/material/Container";
import { ChangeEvent, useState } from "react";
import { BasicForm } from "../../components/basicForm";
import { ButtonComponent } from "../../components/button";
import ResponsiveAppBar from "../../components/header";
import { SingleSelect } from "../../components/singleSelect";
import { LastForm } from "../../components/lastForm";
import { StepperComponent } from "../../components/stepper";
import Header from "../../components/header";

const stepperSteps = ["Step1", "Step2"];

export interface FormData {
  name: string;
  gender: string;
  dob: string;
  description: string;
  location: string;
  team: string;
  sport: string[];
}

export const HomePage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    sport: [],
    dob: "",
    description: "",
    location: "",
    team: "",
  } as FormData);

  const handleNextButtonClick = () => {
    setActiveStep((activeStep) => activeStep + 1);
  };

  const handlePreviousButtonClick = () => {
    setActiveStep((activeStep) => activeStep - 1);
  };

  const handleTextChange = (e: any) => {
    setFormData((formData: FormData) => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSelect = (e: SelectChangeEvent) => {
    const {
      target: { value },
    } = e;
    setFormData((formData: FormData) => ({
      ...formData,
      sport: typeof value === "string" ? value.split(",") : value,
    }));
  };

  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ marginTop: "30px" }}>
        <div>
          <div>
            <StepperComponent steps={stepperSteps} activeStep={activeStep} />
          </div>
          <Container maxWidth="sm">
            <div>
              {activeStep === 1 ? (
                <LastForm
                  formData={formData}
                  handleTextChange={handleTextChange}
                />
              ) : (
                <BasicForm
                  formData={formData}
                  handleTextChange={handleTextChange}
                  handleSelect={handleSelect}
                />
              )}
            </div>
            <div>
              {activeStep !== 0 ? (
                <ButtonComponent
                  label="Previous"
                  onClick={handlePreviousButtonClick}
                />
              ) : null}
              <ButtonComponent
                label={activeStep === 1 ? "Submit" : "Next"}
                onClick={handleNextButtonClick}
              />
            </div>
          </Container>
        </div>
      </Container>
    </>
  );
};
