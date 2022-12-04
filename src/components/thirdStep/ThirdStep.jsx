import React, { useState } from "react";
import FormSection from "./FormSection";
import { Button } from "@mui/material";

export default function ThirdStep({
  addHandler,
  value,
  setValue,
  tabs,
  setTabs,
  tabPanels,
  setTabPanels,
  tabIndex,
  setTabIndex,
  touch,
  setTouch,
  error,
  setError,
  formValues,
  setFormValues,
  jobType,
  setJobType,
  jobTouch,
  setJobTouch,
  handleBack,
  setActiveStep,
  jobError,
  setJobError,
}) {
  const setValueHandler = (value) => {
    setValue(value);
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
              key={item.value}
              onClick={() => setValueHandler(item.value)}
              className={`mx-3 pb-2 ${
                value == item.value && "border-b-2 border-blue-500"
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
            key={item.value}
            className={`${value !== item.value && "hidden"}`}
          >
            <FormSection
              value={item.value}
              tabIndex={tabIndex}
              setTabIndex={setTabIndex}
              touch={touch}
              setTouch={setTouch}
              error={error}
              setError={setError}
              formValues={formValues}
              setFormValues={setFormValues}
              jobType={jobType}
              setJobType={setJobType}
              jobTouch={jobTouch}
              setJobTouch={setJobTouch}
              jobError={jobError}
              setJobError={setJobError}
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
