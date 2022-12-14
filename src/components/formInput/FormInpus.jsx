import React from "react";
import { cities } from "../../dummy data/data";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import AdapterJalali from "@date-io/date-fns-jalali";
import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";

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

const FormInpus = ({
  error,
  touch,
  setTouch,
  formValues,
  label,
  name,
  type,
  date,
  setDate,
  setFormValues,
  tabValue,
  jobDate,
  setJobDate,
  jobType,
  setJobType,
  jobDateId,
}) => {
  const changeHandler = (e) => {
    if (name === "jobCategory") {
      const jobTypeId = jobType?.findIndex((job) => job.id === tabValue);
      const job = { ...jobType[jobTypeId] };
      job.jobCategory = e.target.value;

      const updatedJobs = [...jobType];
      updatedJobs[jobTypeId] = job;
      setJobType(updatedJobs);
    } else {
      setFormValues({ ...formValues, [e.target.name]: e.target.value });
    }
  };

  const changeDateHandler = (newDate) => {
    if (name === "jobCatDate") {
      const jDate = { ...jobDateId };
      jDate.date = newDate;
      const updatedJobsDate = [...jobDate];
      updatedJobsDate[tabValue] = jDate;
      setJobDate(updatedJobsDate);

      const jalaliDate = newDate?.toLocaleDateString("fa-IR");
      const jobTypeId = jobType.findIndex((job) => job.id === tabValue);
      const job = { ...jobType[jobTypeId] };
      job.jobCatDate = jalaliDate;
      const updatedJobs = [...jobType];
      updatedJobs[jobTypeId] = job;
      setJobType(updatedJobs);
    } else {
      setDate(newDate);
      setFormValues({
        ...formValues,
        regDate: newDate?.toLocaleDateString("fa-IR"),
      });
    }
  };
  const focusHandler = (e) => {
    if (name === "jobCategory" || name === "jobCatDate") {
      const jobTypeId = touch.findIndex((job) => job.id === tabValue);
      const job = { ...touch[jobTypeId] };
      job[name] = true;
      const updatedJobs = [...touch];
      updatedJobs[jobTypeId] = job;
      setTouch(updatedJobs);
    } else {
      setTouch({ ...touch, [e.target.name]: true });
    }
  };
  return (
    <div className="flex flex-row justify-start items-start w-full h-16 gap-x-1">
      <label
        htmlFor={name}
        className="text-[13px] font-semibold w-32 pt-2 pointer-events-none"
      >
        {label}
      </label>
      <div className="flex flex-col justify-start items-start w-full">
        {name === "regCity" && (
          <select
            id={name}
            className={`w-full hover:border hover:border-gray-400 rounded-md outline-none border border-gray-400 px-3 py-2 text-sm focus:border-blue-400 focus:border-2 ${
              touch[name] && error[name] && "border-red-500 border"
            }`}
            name={name}
            value={formValues[name]}
            onChange={changeHandler}
            onFocus={focusHandler}
          >
            {cities.map((city) => (
              <option key={city.id} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>
        )}
        {name !== "regCity" && name !== "regDate" && name !== "jobCatDate" && (
          <input
            id={name}
            className={`w-full hover:border hover:border-gray-400 rounded-md outline-none border border-gray-400 px-3 py-2 text-sm focus:border-blue-400 focus:border-2 ${
              error[name] && touch[name] && "border-red-500 border"
            }`}
            name={name}
            type={type}
            value={
              name === "jobCategory"
                ? jobType[tabValue][name]
                : formValues[name]
            }
            onChange={changeHandler}
            onFocus={focusHandler}
          />
        )}
        {type === "date" && (
          <LocalizationProvider dateAdapter={AdapterJalali}>
            <DatePicker
              mask="____/__/__"
              value={name === "jobCatDate" ? jobDateId.date : date}
              onChange={changeDateHandler}
              renderInput={(params) => (
                <TextInput
                  type={type}
                  name={name}
                  onFocus={focusHandler}
                  {...params}
                  size="small"
                  sx={{ width: "100%" }}
                  error={error[name] && touch[name]}
                  inputProps={{
                    ...params.inputProps,
                    placeholder: "",
                  }}
                />
              )}
            />
          </LocalizationProvider>
        )}
        {touch[name] && error[name] && (
          <span className="block text-red-600 text-xs font-bold pt-2">
            {error[name]}
          </span>
        )}
      </div>
    </div>
  );
};

export default FormInpus;
