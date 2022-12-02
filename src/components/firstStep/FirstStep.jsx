import { useEffect, useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import AdapterJalali from "@date-io/date-fns-jalali";
import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";
import validation from "./validation";
import Button from "@mui/material/Button";
import { cities } from "../../dummy data/data";


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

const FirstStep = ({
  touch,
  setTouch,
  error,
  setError,
  setActiveStep,
  formValues,
  setFormValues,
  date,
  setDate,
  handleBack,
}) => {
  useEffect(() => {
    setError(validation(formValues));
  }, [formValues]);
  const changeHandler = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const focusHandler = (e) => {
    setTouch({ ...touch, [e.target.name]: true });
  };

  const dateHandler = (newDate) => {
    setDate(newDate);
    const jalaliDate = newDate?.toLocaleDateString("fa-IR");
    setFormValues({ ...formValues, regDate: jalaliDate });
  };

  const firstStepNext = () => {
    setTouch({
      companyName: true,
      nationalId: true,
      economicId: true,
      regNum: true,
      regCity: true,
      regDate: true,
      job: true,
      CEOName: true,
      CEOLName: true,
      foundation: true,
      newspaper: true,
      nationalCard: true,
      agent: true,
    });
    if (!Object.keys(error).length) {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };
  return (
    <div className="w-full my-20">
      <form className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full h-auto">
          <div className="flex flex-row justify-start items-start w-full h-16 gap-x-1">
            <label
              htmlFor="companyName"
              className="text-[13px] font-semibold w-32 pt-2 pointer-events-none"
            >
              نام شرکت
            </label>
            <div className="flex flex-col justify-start items-start w-full">
              <input
                id="companyName"
                className={`w-full hover:border hover:border-gray-400 rounded-md outline-none border border-gray-400 px-3 py-2 text-sm focus:border-blue-400 focus:border-2 ${
                  error.companyName &&
                  touch.companyName &&
                  "border-red-500 border"
                }`}
                name="companyName"
                type="text"
                value={formValues.companyName}
                onChange={changeHandler}
                onFocus={focusHandler}
              />
              {touch.companyName && error.companyName && (
                <span className="block text-red-600 text-xs font-bold pt-2">
                  {error.companyName}
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-row justify-start items-start w-full h-16 gap-x-1">
            <label
              htmlFor="nationalId"
              className="text-[13px] font-semibold w-32 pt-2 pointer-events-none"
            >
              شناسه ملی
            </label>
            <div className="flex flex-col justify-start items-start w-full">
              <input
                id="nationalId"
                className={`w-full hover:border hover:border-gray-400 rounded-md outline-none border border-gray-400 px-3 py-2 text-sm focus:border-blue-400 focus:border-2 ${
                  touch.nationalId &&
                  error.nationalId &&
                  "border-red-500 border"
                }`}
                name="nationalId"
                type="number"
                value={formValues.nationalId}
                onChange={changeHandler}
                onFocus={focusHandler}
              />
              {touch.nationalId && error.nationalId && (
                <span className="block text-red-600 text-xs font-bold pt-2">
                  {error.nationalId}
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-row justify-start items-start w-full h-16 gap-x-1">
            <label
              htmlFor="economicId"
              className="text-[13px] font-semibold w-32 pt-2 pointer-events-none"
            >
              کد اقتصادی
            </label>
            <div className="flex flex-col justify-start items-start w-full">
              <input
                id="economicId"
                className={`w-full hover:border hover:border-gray-400 rounded-md outline-none border border-gray-400 px-3 py-2 text-sm focus:border-blue-400 focus:border-2 ${
                  touch.economicId &&
                  error.economicId &&
                  "border-red-500 border"
                }`}
                name="economicId"
                type="number"
                value={formValues.economicId}
                onChange={changeHandler}
                onFocus={focusHandler}
              />
              {touch.economicId && error.economicId && (
                <span className="block text-red-600 text-xs font-bold pt-2">
                  {error.economicId}
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-row justify-start items-start w-full h-16 gap-x-1">
            <label
              htmlFor="regNum"
              className="text-[13px] font-semibold w-32 pt-2 pointer-events-none"
            >
              شماره ثبت
            </label>
            <div className="flex flex-col justify-start items-start w-full">
              <input
                id="regNum"
                className={`w-full hover:border hover:border-gray-400 rounded-md outline-none border border-gray-400 px-3 py-2 text-sm focus:border-blue-400 focus:border-2 ${
                  touch.regNum && error.regNum && "border-red-500 border"
                }`}
                name="regNum"
                type="number"
                value={formValues.regNum}
                onChange={changeHandler}
                onFocus={focusHandler}
              />
              {touch.regNum && error.regNum && (
                <span className="block text-red-600 text-xs font-bold pt-2">
                  {error.regNum}
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-row justify-start items-start w-full h-16 gap-x-1">
            <label
              htmlFor="regCity"
              className="text-[13px] font-semibold w-32 pt-2 pointer-events-none"
            >
              شهرستان محل ثبت
            </label>
            <div className="flex flex-col justify-start items-start w-full">
              <select
                id="regCity"
                className={`w-full hover:border hover:border-gray-400 rounded-md outline-none border border-gray-400 px-3 py-2 text-sm focus:border-blue-400 focus:border-2 ${
                  touch.regCity && error.regCity && "border-red-500 border"
                }`}
                name="regCity"
                value={formValues.regCity}
                onChange={changeHandler}
                onFocus={focusHandler}
              >
                {cities.map((city) => (
                  <option key={city.id} value={city.name}>
                    {city.name}
                  </option>
                ))}
              </select>
              {touch.regCity && error.regCity && (
                <span className="block text-red-600 text-xs font-bold pt-2">
                  {error.regCity}
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-row justify-start items-start w-full h-16 gap-x-1">
            <label
              htmlFor="regDate"
              className="text-[13px] font-semibold w-32 pt-2 pointer-events-none"
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
                      name="regDate"
                      onFocus={focusHandler}
                      {...params}
                      size="small"
                      sx={{ width: "100%" }}
                      error={error.regDate && touch.regDate}
                      inputProps={{
                        ...params.inputProps,
                        placeholder: "",
                      }}
                    />
                  )}
                />
              </LocalizationProvider>
              {touch.regDate && error.regDate && (
                <span className="block text-red-600 text-xs font-bold pt-2">
                  {error.regDate}
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-row justify-start items-start w-full h-16 gap-x-1">
            <label
              htmlFor="job"
              className="text-[13px] font-semibold w-32 pt-2 pointer-events-none"
            >
              زمینه فعالیت
            </label>
            <div className="flex flex-col justify-start items-start w-full">
              <input
                id="job"
                className={`w-full hover:border hover:border-gray-400 rounded-md outline-none border border-gray-400 px-3 py-2 text-sm focus:border-blue-400 focus:border-2 ${
                  touch.job && error.job && "border-red-500 border"
                }`}
                name="job"
                type="text"
                value={formValues.job}
                onChange={changeHandler}
                onFocus={focusHandler}
              />
              {touch.job && error.job && (
                <span className="block text-red-600 text-xs font-bold pt-2">
                  {error.job}
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-row justify-start items-start w-full h-16 gap-x-1">
            <label
              htmlFor="CEOName"
              className="text-[13px] font-semibold w-32 pt-2 pointer-events-none"
            >
              نام مدیرعامل
            </label>
            <div className="flex flex-col justify-start items-start w-full">
              <input
                id="CEOName"
                className={`w-full hover:border hover:border-gray-400 rounded-md outline-none border border-gray-400 px-3 py-2 text-sm focus:border-blue-400 focus:border-2 ${
                  touch.CEOName && error.CEOName && "border-red-500 border"
                }`}
                name="CEOName"
                type="text"
                value={formValues.CEOName}
                onChange={changeHandler}
                onFocus={focusHandler}
              />
              {touch.CEOName && error.CEOName && (
                <span className="block text-red-600 text-xs font-bold pt-2">
                  {error.CEOName}
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-row justify-start items-start w-full h-16 gap-x-1">
            <label
              htmlFor="CEOLName"
              className="text-[13px] font-semibold w-32 pt-2 pointer-events-none"
            >
              نام خانوادگی مدیرعامل{" "}
            </label>
            <div className="flex flex-col justify-start items-start w-full">
              <input
                id="CEOLName"
                className={`w-full hover:border hover:border-gray-400 rounded-md outline-none border border-gray-400 px-3 py-2 text-sm focus:border-blue-400 focus:border-2 ${
                  touch.CEOLName && error.CEOLName && "border-red-500 border"
                }`}
                name="CEOLName"
                type="text"
                value={formValues.CEOLName}
                onChange={changeHandler}
                onFocus={focusHandler}
              />
              {touch.CEOLName && error.CEOLName && (
                <span className="block text-red-600 text-xs font-bold pt-2">
                  {error.CEOLName}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="w-full pt-12 flex flex-row justify-between md:justify-start items-center">
          <Button
            onClick={firstStepNext}
            variant="contained"
            sx={{ fontFamily: "vazir", mr: 2 }}
          >
            مرحله بعدی
          </Button>
          <Button
            disabled
            color="inherit"
            onClick={handleBack}
            sx={{ ml: 2, fontFamily: "vazir" }}
          >
            مرحله قبلی
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FirstStep;
