import { useEffect } from "react";
import validation from "./validation";
import FormInpus from "../formInput/FormInpus";
import Button from "../button/Button";
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

  const firstStepNext = (e) => {
    e.preventDefault();
    setTouch({
      ...touch,
      companyName: true,
      nationalId: true,
      economicId: true,
      regNum: true,
      regCity: true,
      regDate: true,
      job: true,
      CEOName: true,
      CEOLName: true,
    });
    if (!Object.keys(error).length) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  return (
    <div className="w-full my-20">
      <form className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full h-auto">
          {formInputsList.map((input) => (
            <FormInpus
              setFormValues={setFormValues}
              date={date}
              key={input.id}
              error={error}
              formValues={formValues}
              touch={touch}
              setDate={setDate}
              setTouch={setTouch}
              {...input}
            />
          ))}
        </div>
        <div className="w-full pt-12 flex flex-row justify-between md:justify-start items-center">
          <Button onClick={firstStepNext} label={"مرحله بعدی"} />
          <Button disable onClick={handleBack} label={"مرحله قبلی"} />
        </div>
      </form>
    </div>
  );
};

export default FirstStep;
