import { useEffect } from "react";
import validation from "./validation";
import Button from "@mui/material/Button";
import FormInpus from "../formInput/FormInpus";

const formInputsList = [
  { id: 1, label: "نام شرکت", name: "companyName", type: "text" },
  { id: 2, label: "شناسه ملی", name: "nationalId", type: "number" },
  { id: 3, label: "کد اقتصادی", name: "economicId", type: "number" },
  { id: 4, label: "شماره ثبت", name: "regNum", type: "number" },
  { id: 5, label: "شهرستان محل ثبت", name: "regCity", type: "" },
  { id: 6, label: "تاریخ ثبت", name: "regDate", type: "date" },
  { id: 7, label: "زمینه فعالیت", name: "job", type: "text" },
  { id: 8, label: "نام مدیرعامل", name: "CEOName", type: "text" },
  { id: 9, label: "نام خانوادگی مدیرعامل", name: "CEOLName", type: "text" },
];

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
  const changeDateHandler = (newDate) => {
    setDate(newDate);
    setFormValues({
      ...formValues,
      regDate: newDate?.toLocaleDateString("fa-IR"),
    });
  };

  const focusHandler = (e) => {
    setTouch({ ...touch, [e.target.name]: true });
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
    // if (!Object.keys(error).length) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    // }
  };

  return (
    <div className="w-full my-20">
      <form className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full h-auto">
          {formInputsList.map((input) => (
            <FormInpus
              date={date}
              key={input.id}
              error={error}
              formValues={formValues}
              touch={touch}
              changeHandler={
                input.name === "regDate" ? changeDateHandler : changeHandler
              }
              focusHandler={focusHandler}
              {...input}
            />
          ))}
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
