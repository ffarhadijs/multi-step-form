import * as React from "react";
import { useState } from "react";
import FirstStep from "../firstStep/FirstStep";
import SecondStep from "../secondStep/SecondStep";
import ThirdStep from "../thirdStep/ThirdStep";
import ConfirmStep from "../confirmStep/ConfirmStep";
import { BsCheck } from "react-icons/bs";
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
      <div className="flex flex-row justify-start items-center w-full ">
        {steps.map((label, index) => {
          return (
            <span
              key={label}
              className={`
              relative flex flex-row items-center justify-start w-full 
              `}
            >
              <span
                className={`flex flex-col items-center justify-cneter mx-auto h-20 `}
              >
                <span className=" z-[1] w-8 py-1 h-auto mb-2 rounded-full bg-blue-500 text-white flex items-center justify-center">
                  {index < activeStep ? (
                    <i className="text-[24px] font-bold h-6 flex items-center justify-center">
                      <BsCheck />
                    </i>
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </span>
                <span className="text-[12px] sm:text-[14px] w-full text-center">
                  {label}
                </span>
              </span>
              <span
                className={`
                ${index === 0 && "md:right-20 lg:right-[120px] xl:right-28"}
                ${index === 3 && "md:left-20 lg:left-[120px] xl:left-28"}
                 w-full absolute top-4 left-1 h-px bg-gray-800 z-[0] hidden md:inline-block`}
              ></span>
            </span>
          );
        })}
      </div>
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
          tabValue={tabValue}
          setTabValue={setTabValue}
          tabs={tabs}
          tabIndex={tabIndex}
          error={error}
          jobType={jobType}
          setJobType={setJobType}
          jobTouch={jobTouch}
          setJobTouch={setJobTouch}
          handleBack={handleBack}
          setActiveStep={setActiveStep}
          jobError={jobError}
          jobDate={jobDate}
          setJobDate={setJobDate}
        />
      ) : null}
    </div>
  );
}
