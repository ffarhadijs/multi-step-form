import * as React from "react";
import { useState } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import FirstStep from "../firstStep/FirstStep";
import SecondStep from "../secondStep/SecondStep";
import ThirdStep from "../thirdStep/ThirdStep";
import ConfirmStep from "../confirmStep/ConfirmStep";

const steps = ["اقدامات ثبتی شرکت", "مدارک ثبتی شرکت", "شغل", "تأیید"];

export default function Form() {
  const [allInputsValue, setAllInputsValue] = useState({}); //all inputs value
  const [activeStep, setActiveStep] = useState(0);
  const [formValues, setFormValues] = useState({
    companyName: "",
    nationalId: "",
    economicId: "",
    regNum: "",
    regCity: "",
    regDate: null,
    job: "",
    CEOName: "",
    CEOLName: "",
    foundation: "",
    newspaper: "",
    nationalCard: "",
    agent: "",
    checkBox: false,
  });
  const [date, setDate] = useState(null);
  const [touch, setTouch] = useState({
    foundation: false,
    newspaper: false,
    nationalCard: false,
    agent: false,
    companyName: false,
    nationalId: false,
    economicId: false,
    regNum: false,
    regCity: false,
    regDate: false,
    job: false,
    CEOName: false,
    checkBox: false,
    CEOLName: false,
  });
  const [error, setError] = useState({});
  const [size, setSize] = useState({
    foundation: "",
    newspaper: "",
    nationalCard: "",
    agent: "",
  });

  const [jobError, setJobError] = useState({});
  const [tabIndex, setTabIndex] = useState(1);
  const [jobType, setJobType] = useState([
    {
      id: 0,
      jobCategory: "",
      jobCatDate: null,
      firstDoc: null,
      secondDoc: null,
    },
  ]);
  const [jobTouch, setJobTouch] = useState([
    {
      id: 0,
      jobCategory: false,
      jobCatDate: false,
      firstDoc: false,
      secondDoc: false,
    },
  ]);
  const [jobDate, setJobDate] = useState([{ id: 0, date: null }]);
  const [tabValue, setTabValue] = useState(0);
  const [tabs, setTabs] = useState([{ tabValue: 0, label: " رسته شغلی1" }]);
  const [tabPanels, setTabPanels] = useState([{ tabValue: 0 }]);

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const addHandler = () => {
    setTabIndex(tabIndex + 1);
    const newDate = {
      id: tabIndex,
      date: null,
    };
    setJobDate([...jobDate, newDate]);
    const newJob = {
      id: tabIndex,
      jobCategory: "",
      jobCatDate: null,
      firstDoc: null,
      secondDoc: null,
    };
    setJobType([...jobType, newJob]);
    const newJobTouch = {
      id: tabIndex,
      jobCategory: false,
      jobCatDate: false,
      firstDoc: false,
      secondDoc: false,
    };
    setJobTouch([...jobTouch, newJobTouch]);

    const newTab = {
      tabValue: tabIndex,
      label: `رسته شغلی${tabIndex + 1}`,
    };
    const newTabPanel = {
      tabValue: tabIndex,
    };
    setTabs([...tabs, newTab]);
    setTabPanels([...tabPanels, newTabPanel]);
  };

  return (
    <div className="lg:w-[1000px] md:w-[750px] sm:w-[600px] w-full h-auto bg-white mx-auto p-[40px]">
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>
                <span className={"font-vazir"}>{label}</span>
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length - 1 ? (
        <ConfirmStep
          allInputsValue={allInputsValue}
          setAllInputsValue={setAllInputsValue}
          touch={touch}
          setTouch={setTouch}
          error={error}
          setError={setError}
          handleBack={handleBack}
          formValues={formValues}
          setFormValues={setFormValues}
          jobType={jobType}
        />
      ) : activeStep === 0 ? (
        <FirstStep
          touch={touch}
          setTouch={setTouch}
          error={error}
          setError={setError}
          date={date}
          setDate={setDate}
          setActiveStep={setActiveStep}
          formValues={formValues}
          setFormValues={setFormValues}
          handleBack={handleBack}
        />
      ) : activeStep === 1 ? (
        <SecondStep
          size={size}
          setSize={setSize}
          touch={touch}
          setTouch={setTouch}
          error={error}
          setError={setError}
          setActiveStep={setActiveStep}
          formValues={formValues}
          setFormValues={setFormValues}
          handleBack={handleBack}
        />
      ) : activeStep === 2 ? (
        <ThirdStep
          addHandler={addHandler}
          touch={touch}
          setTouch={setTouch}
          error={error}
          setError={setError}
          formValues={formValues}
          setFormValues={setFormValues}
          tabValue={tabValue}
          setTabValue={setTabValue}
          tabs={tabs}
          setTabs={setTabs}
          tabPanels={tabPanels}
          setTabPanels={setTabPanels}
          tabIndex={tabIndex}
          setTabIndex={setTabIndex}
          jobType={jobType}
          setJobType={setJobType}
          jobTouch={jobTouch}
          setJobTouch={setJobTouch}
          handleBack={handleBack}
          setActiveStep={setActiveStep}
          jobError={jobError}
          setJobError={setJobError}
          jobDate={jobDate}
          setJobDate={setJobDate}
        />
      ) : null}
    </div>
  );
}
