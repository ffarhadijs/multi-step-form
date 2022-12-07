import { Button } from "@mui/material";
import React, { Fragment, useEffect } from "react";
import ImageThumb from "../imageThumb/ImageThumb";
import ShowInputsValue from "../showInputsValue/ShowInputsValue";
import validation from "./validation";

const ConfirmStep = ({
  handleBack,
  formValues,
  setFormValues,
  touch,
  setTouch,
  error,
  setError,
  jobType,
  setAllInputsValue,
}) => {
  const inputsDataList = [
    { id: 1, label: "نام شرکت :", value: formValues.companyName },
    { id: 2, label: "شناسه ملی :", value: formValues.nationalId },
    { id: 3, label: " کد اقتصادی :", value: formValues.economicId },
    { id: 4, label: " شماره ثبت :", value: formValues.regNum },
    { id: 5, label: "شهرستان محل ثبت :", value: formValues.regCity },
    { id: 6, label: " تاریخ ثبت :", value: formValues.regDate },
    { id: 7, label: " زمینه فعالیت :", value: formValues.job },
    { id: 8, label: " نام مدیرعامل :", value: formValues.CEOName },
    { id: 9, label: " نام خانوادگی مدیرعامل :", value: formValues.CEOLName },
  ];
  const showImagesList = [
    { id: 1, label: "تصویر آگهی تأسیس", src: formValues.foundation },
    {
      id: 2,
      label: "تصویر آخرین روزنامه رسمی (حداکثر یک سال گذشته)",
      src: formValues.newspaper,
    },
    { id: 3, label: "تصویر کارت ملی مدیرعامل", src: formValues.nationalCard },
    { id: 4, label: "معرفی نماینده با سربرگ شرکت", src: formValues.agent },
  ];
  const changeHandler = (e) => {
    setFormValues({ ...formValues, checkBox: !formValues.checkBox });
  };
  const focusHandler = (e) => {
    setTouch({ ...touch, checkBox: true });
  };
  useEffect(() => {
    setError(validation(formValues));
  }, [formValues]);
  const thirdStepNext = () => {
    setTouch({
      checkBox: true,
    });

    if (!Object.keys(error).length) {
      console.log("اطلاعات شما دریافت گردید");
    }
    setAllInputsValue({ formValues, jobType });
  };
  return (
    <div className="w-full my-20">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 gap-y-6 md:gap-y-12 w-full h-auto">
        {inputsDataList.map((itemData) => (
          <ShowInputsValue key={itemData.id} {...itemData} />
        ))}
        {jobType?.map((item) => (
          <Fragment key={item.id}>
            {item.jobCategory && (
              <ShowInputsValue label={"رسته شغلی:"} value={item.jobCategory} />
            )}
            {item.jobCatDate && (
              <ShowInputsValue label={"تاریخ ثبت:"} value={item.jobCatDate} />
            )}
          </Fragment>
        ))}
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 gap-y-6 md:gap-y-12 w-full h-auto mt-6">
        {showImagesList.map((image) => (
          <ImageThumb key={image.id} {...image} />
        ))}
        {jobType?.map((item) => (
          <Fragment key={item.id}>
            {item.firstDoc && (
              <ImageThumb label={"تصویر مدرک 1"} src={item.firstDoc} />
            )}
            {item.secondDoc && (
              <ImageThumb label={"تصویر مدرک 2"} src={item.secondDoc} />
            )}
          </Fragment>
        ))}
      </div>
      <div className="mt-8">
        <input
          id="checkBox"
          type="checkbox"
          value={formValues.checkBox}
          onChange={changeHandler}
          onFocus={focusHandler}
          name="checkBox"
          className="ml-2"
        />
        <label htmlFor="checkBox">صحت اطلاعات فوق مورد تأیید است</label>
        {error.checkBox && touch.checkBox && (
          <p className=" text-red-600 text-xs font-bold pt-2">
            {error.checkBox}
          </p>
        )}
      </div>
      <div className="w-full pt-12 flex flex-row justify-between md:justify-start items-center">
        <Button
          onClick={thirdStepNext}
          variant="contained"
          sx={{ fontFamily: "vazir", mr: 2 }}
        >
          تایید
        </Button>
        <Button
          variant="contained"
          onClick={handleBack}
          sx={{ ml: 2, fontFamily: "vazir" }}
        >
          مرحله قبلی
        </Button>
      </div>
    </div>
  );
};

export default ConfirmStep;
