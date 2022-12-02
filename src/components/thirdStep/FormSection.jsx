import React, { useEffect, useRef, useState } from "react";
import validation from "./validation";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Box, Modal, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import AdapterJalali from "@date-io/date-fns-jalali";
import { FaTrashAlt } from "react-icons/fa";

const TextInput = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#9ca3af",
    },
    "&:hover fieldset": {
      borderColor: "#9ca3af",
      borderWidth: "1px",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#60a5fa",
      borderWidth: "2px",
    },
  },
});
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};
const FormSection = ({
  touch,
  setTouch,
  error,
  setError,
  formValues,
  setFormValues,
  tabIndex,
  setTabIndex,
  jobType,
  setJobType,
  value,
  jobTouch,
  setJobTouch,
  jobError,
  setJobError,
}) => {
  const firstDocRef = useRef();
  const secondDocRef = useRef();
  const [date, setDate] = useState(null);
  const [open, setOpen] = useState(false);
  const [modalFile, setModalFile] = useState(null);

  const changeHandler = (e) => {
    const jobTypeId = jobType.findIndex((job) => job.id === value);
    const job = { ...jobType[jobTypeId] };
    job.jobCategory = e.target.value;

    const updatedJobs = [...jobType];
    updatedJobs[jobTypeId] = job;
    setJobType(updatedJobs);
  };

  const focusHandler = (e) => {
    const jobTypeId = jobTouch.findIndex((job) => job.id === value);
    const job = { ...jobTouch[jobTypeId] };
    job[e.target.name] = true;
    const updatedJobs = [...jobTouch];
    updatedJobs[jobTypeId] = job;
    setJobTouch(updatedJobs);
  };

  const dateHandler = (newDate) => {
    setDate(newDate);
    const jalaliDate = newDate?.toLocaleDateString("fa-IR");

    const jobTypeId = jobType.findIndex((job) => job.id === value);
    const job = { ...jobType[jobTypeId] };
    job.jobCatDate = jalaliDate;

    const updatedJobs = [...jobType];
    updatedJobs[jobTypeId] = job;
    setJobType(updatedJobs);
  };
  const DocHandler = (e) => {
    const jobTypeId = jobType.findIndex((job) => job.id === value);
    const job = { ...jobType[jobTypeId] };
    job[e.target.name] = e.target.files;

    const updatedJobs = [...jobType];
    updatedJobs[jobTypeId] = job;
    setJobType(updatedJobs);
    // setSize({ ...size, [e.target.name]: e.target.files[0].size });
  };

  const removeFirstDocHandler = () => {
    const jobTypeId = jobType.findIndex((job) => job.id === value);
    const job = { ...jobType[jobTypeId] };
    job.firstDoc = null;

    const updatedJobs = [...jobType];
    updatedJobs[jobTypeId] = job;
    setJobType(updatedJobs);
    firstDocRef.current.value = null;
  };
  const removeSecondDocHandler = () => {
    const jobTypeId = jobType.findIndex((job) => job.id === value);
    const job = { ...jobType[jobTypeId] };
    job.secondDoc = null;

    const updatedJobs = [...jobType];
    updatedJobs[jobTypeId] = job;
    setJobType(updatedJobs);
    secondDocRef.current.value = null;
  };

  const modalHandler = (file) => {
    setOpen(true);
    setModalFile(file);
  };
  const handleClose = () => {
    setOpen(false);
    setModalFile(null);
  };
  // useEffect(() => {
  //   setJobError(validation(jobType[value]));
  // }, [jobType]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full h-auto">
      <div className="flex flex-row justify-start items-start w-72 h-16 gap-x-1">
        <label
          htmlFor="jobCategory"
          className="text-[13px] font-semibold w-20 pt-2 pointer-events-none"
        >
          رسته شغلی{" "}
        </label>
        <div className="flex flex-col justify-start items-start w-full">
          <input
            id="jobCategory"
            className={`w-full rounded-md outline-none border border-gray-400 px-3 py-2 text-sm focus:border-blue-400 focus:border-2 ${
              jobError?.jobCategory &&
              jobTouch[value]?.jobCategory &&
              "border-red-500 border"
            }`}
            name="jobCategory"
            type="text"
            value={jobType.find((item) => item.id === value)?.jobCategory}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {jobTouch[value]?.jobCategory &&
            jobError?.jobCategory && (
              <span className="block text-red-600 text-xs font-bold pt-2">
                {jobError?.jobCategory}
              </span>
            )}
        </div>
      </div>{" "}
      <div className="flex flex-row justify-start items-start w-72 h-16 gap-x-1">
        <label
          htmlFor="regDate"
          className="text-[13px] font-semibold w-20 pt-2 pointer-events-none"
        >
          تاریخ ثبت
        </label>
        <div className="flex flex-col justify-start items-start w-full">
          <LocalizationProvider dateAdapter={AdapterJalali}>
            <DatePicker
              mask="____/__/__"
              value={date}
              onChange={dateHandler}
              renderInput={(params) => (
                <TextInput
                  name="jobCatDate"
                  onFocus={focusHandler}
                  {...params}
                  size="small"
                  sx={{ width: "100%" }}
                  error={
                    jobError[tabIndex - 1]?.jobCatDate &&
                    jobTouch[tabIndex - 1]?.jobCatDate
                  }
                  inputProps={{
                    ...params.inputProps,
                    placeholder: "",
                  }}
                />
              )}
            />
          </LocalizationProvider>
          {jobTouch[tabIndex - 1]?.jobCatDate &&
            jobError[tabIndex - 1]?.jobCatDate && (
              <span className="block text-red-600 text-xs font-bold pt-2">
                {jobError[tabIndex - 1]?.jobCatDate}
              </span>
            )}
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-y-4 w-full border rounded-md border-gray-400 p-2">
        <label htmlFor="firstDoc" className="pointer-events-none text-[15px]">
          تصویر مدرک 1{" "}
        </label>
        <div className="flex flex-row items-center justify-between w-full">
          <input
            ref={firstDocRef}
            id="firstDoc"
            name="firstDoc"
            accept="image/png, image/jpg, image/jpeg"
            onChange={DocHandler}
            onFocus={focusHandler}
            type={"file"}
            className="text-sm"
          />
          <button
            className="pl-8 text-red-500 text-xl outline-none"
            onClick={removeFirstDocHandler}
          >
            <FaTrashAlt />
          </button>
        </div>
        <img
          onClick={() =>
            jobType.find((item) => item.id === value)?.firstDoc?.length > 0 &&
            modalHandler(
              URL.createObjectURL(
                jobType.find((item) => item.id === value)?.firstDoc[0]
              )
            )
          }
          className="w-full h-auto max-w-[400px] max-h-64 mx-auto"
          src={
            jobType.find((item) => item.id === value)?.firstDoc?.length > 0
              ? URL.createObjectURL(
                  jobType.find((item) => item.id === value)?.firstDoc[0]
                )
              : null
          }
        />
        {jobTouch[tabIndex - 1]?.firstDoc && error.firstDoc && (
          <span className="block text-red-600 text-xs font-bold pt-2">
            {error.firstDoc}
          </span>
        )}
      </div>
      <div className="flex flex-col items-start justify-start gap-y-4 w-full border rounded-md border-gray-400 p-2">
        <label htmlFor="secondDoc" className="pointer-events-none text-[15px]">
          تصویر مدرک 2{" "}
        </label>
        <div className="flex flex-row items-center justify-between w-full">
          <input
            ref={secondDocRef}
            id="secondDoc"
            name="secondDoc"
            accept="image/png, image/jpg, image/jpeg"
            onChange={DocHandler}
            onFocus={focusHandler}
            type={"file"}
            className="text-sm"
          />
          <button
            className="pl-8 text-red-500 text-xl outline-none"
            onClick={removeSecondDocHandler}
          >
            <FaTrashAlt />
          </button>
        </div>
        <img
          onClick={() =>
            jobType.find((item) => item.id === value)?.secondDoc?.length > 0 &&
            modalHandler(
              URL.createObjectURL(
                jobType.find((item) => item.id === value)?.secondDoc[0]
              )
            )
          }
          className="w-full h-auto max-w-[400px] max-h-64 mx-auto"
          src={
            jobType.find((item) => item.id === value)?.secondDoc?.length > 0
              ? URL.createObjectURL(
                  jobType.find((item) => item.id === value)?.secondDoc[0]
                )
              : null
          }
        />
        {jobTouch[tabIndex - 1]?.secondDoc && error.secondDoc && (
          <span className="block text-red-600 text-xs font-bold pt-2">
            {error.secondDoc}
          </span>
        )}
      </div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <img
            className="max-w-2xl max-h-[600px] w-[300px] sm:w-[500px] md:w-[600px] h-[350px] sm:h-[450px] md:h-auto"
            src={modalFile}
          />
        </Box>
      </Modal>
    </div>
  );
};

export default FormSection;
