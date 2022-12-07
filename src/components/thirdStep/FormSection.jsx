import React, { createRef } from "react";
import ImageUploader from "../imageUploader/ImageUploader";
import FormInpus from "../formInput/FormInpus";



const FormSection = ({
  error,
  jobType,
  setJobType,
  tabValue,
  jobTouch,
  setJobTouch,
  jobError,
  jobDate,setJobDate
}) => {
  const firstDocRef = createRef();
  const secondDocRef = createRef();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full h-auto">
      <FormInpus
        label={"رسته شغلی"}
        name="jobCategory"
        touch={jobTouch}
        setTouch={setJobTouch}
        error={jobError}
        type="text"
        tabValue={tabValue}
        jobType={jobType}
        setJobType={setJobType}
      />
      <FormInpus
        jobDate={jobDate}
        label="تاریخ ثبت"
        name="jobCatDate"
        touch={jobTouch}
        setTouch={setJobTouch}
        error={jobError}
        type="date"
        tabValue={tabValue}
        jobType={jobType}
        setJobType={setJobType}
        setJobDate={setJobDate}
        jobDateId={jobDate[tabValue]}
      />
      <ImageUploader
        jobType={jobType}
        setJobType={setJobType}
        label={"تصویر مدرک 1"}
        name={"firstDoc"}
        ref={firstDocRef}
        tabValue={tabValue}
        value={jobType.find((item) => item.id === tabValue)?.firstDoc}
        touch={jobTouch}
        setTouch={setJobTouch}
        error={error}
      />
      <ImageUploader
        jobType={jobType}
        setJobType={setJobType}
        label={"تصویر مدرک 2"}
        name={"secondDoc"}
        ref={secondDocRef}
        tabValue={tabValue}
        value={jobType.find((item) => item.id === tabValue)?.secondDoc}
        touch={jobTouch}
        setTouch={setJobTouch}
        error={error}
      />
    </div>
  );
};

export default FormSection;
