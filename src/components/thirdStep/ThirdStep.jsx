import React from "react";
import FormSection from "./FormSection";
import { Button } from "@mui/material";

export default function ThirdStep({
  addHandler,
  tabValue,
  setTabValue,
  tabs,
  tabIndex,
  error,
  jobType,
  setJobType,
  jobTouch,
  setJobTouch,
  handleBack,
  setActiveStep,
  jobError,
  jobDate,setJobDate
}) {
  const setValueHandler = (tabValue) => {
    setTabValue(tabValue);
  };
  const ThirdStepNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  return (
    <div className="w-full py-20">
      <div className="flex flex-row justify-between items-center">
        <div>
          {tabs.map((item) => (
            <button
              key={item.tabValue}
              onClick={() => setValueHandler(item.tabValue)}
              className={`mx-3 pb-2 ${
                tabValue == item.tabValue && "border-b-2 border-blue-500"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
        <Button
          disabled={tabIndex === 3}
          onClick={addHandler}
          variant={"contained"}
          sx={{ mr: 2, fontFamily: "vazir" }}
        >
          اضافه کردن رسته شغلی
        </Button>
      </div>
      <div className="pt-16">
        {tabs.map((item) => (
          <div
            key={item.tabValue}
            className={`${tabValue !== item.tabValue && "hidden"}`}
          >
            <FormSection
              tabValue={item.tabValue}
              tabIndex={tabIndex}
              error={error}
              jobType={jobType}
              setJobType={setJobType}
              jobTouch={jobTouch}
              setJobTouch={setJobTouch}
              jobError={jobError}
              jobDate={jobDate}
              setJobDate={setJobDate}
            />
          </div>
        ))}
      </div>
      <div className="w-full pt-12 flex flex-row justify-between md:justify-start items-center">
        <Button
          variant={"contained"}
          onClick={ThirdStepNext}
          sx={{ mr: 2, fontFamily: "vazir" }}
        >
          مرحله بعدی
        </Button>
        <Button
          variant={"contained"}
          onClick={handleBack}
          sx={{ ml: 2, fontFamily: "vazir" }}
        >
          مرحله قبلی
        </Button>
      </div>
    </div>
  );
}
