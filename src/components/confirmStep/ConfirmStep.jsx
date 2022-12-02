import { Button } from "@mui/material";
import React, { useEffect } from "react";
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
  setAllData
}) => {
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
    setAllData({formValues,jobType})
  };
  console.log(formValues);
  return (
    <div className="w-full my-20">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 gap-y-6 md:gap-y-12 w-full h-auto">
        <div className="flex flex-row justify-start items-center w-full gap-x-1 bg-gray-200 rounded-md p-4">
          <span className=" w-24 text-[14px] font-semibold">نام شرکت:</span>
          <span className="text-[13px] ">{formValues.companyName}</span>
        </div>
        <div className="flex flex-row justify-start items-center w-full gap-x-1 bg-gray-200 rounded-md p-4">
          <span className=" w-24 text-[14px] font-semibold">شناسه ملی:</span>
          <span className="text-[13px]">{formValues.nationalId}</span>
        </div>
        <div className="flex flex-row justify-start items-center w-full gap-x-1 bg-gray-200 rounded-md p-4">
          <span className=" w-24 text-[14px] font-semibold">کد اقتصادی:</span>
          <span className="text-[13px]">{formValues.economicId}</span>
        </div>
        <div className="flex flex-row justify-start items-center w-full gap-x-1 bg-gray-200 rounded-md p-4">
          <span className=" w-24 text-[14px] font-semibold">شماره ثبت:</span>
          <span className="text-[13px]">{formValues.regNum}</span>
        </div>
        <div className="flex flex-row justify-start items-center w-full gap-x-1 bg-gray-200 rounded-md p-4">
          <span className=" w-24 text-[14px] font-semibold">
            شهرستان محل ثبت:
          </span>
          <span className="text-[13px]">{formValues.regCity}</span>
        </div>
        <div className="flex flex-row justify-start items-center w-full gap-x-1 bg-gray-200 rounded-md p-4">
          <span className=" w-24 text-[14px] font-semibold">تاریخ ثبت:</span>
          <span className="text-[13px]">{formValues.regDate}</span>
        </div>
        <div className="flex flex-row justify-start items-center w-full gap-x-1 bg-gray-200 rounded-md p-4">
          <span className=" w-24 text-[14px] font-semibold">زمینه فعالیت:</span>
          <span className="text-[13px]">{formValues.job}</span>
        </div>
        <div className="flex flex-row justify-start items-center w-full gap-x-1 bg-gray-200 rounded-md p-4">
          <span className=" w-24 text-[14px] font-semibold">نام مدیرعامل:</span>
          <span className="text-[13px]">{formValues.CEOName}</span>
        </div>
        <div className="flex flex-row justify-start items-center w-full gap-x-1 bg-gray-200 rounded-md p-4">
          <span className=" w-24 text-[14px] font-semibold">
            نام خانوادگی مدیرعامل:
          </span>
          <span className="text-[13px]">{formValues.CEOLName}</span>
        </div>
        {jobType.map((item) => (
          <>
            {item.jobCategory && (
              <div className="flex flex-row justify-start items-center w-full gap-x-1 bg-gray-200 rounded-md p-4">
                <span className=" w-24 text-[14px] font-semibold">
                  رسته شغلی:
                </span>
                <span className="text-[13px]">{item.jobCategory}</span>
              </div>
            )}
            {item.jobCatDate && (
              <div className="flex flex-row justify-start items-center w-full gap-x-1 bg-gray-200 rounded-md p-4">
                <span className=" w-24 text-[14px] font-semibold">
                  تاریخ ثبت:
                </span>
                <span className="text-[13px]">{item.jobCatDate}</span>
              </div>
            )}
          </>
        ))}
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 gap-y-6 md:gap-y-12 w-full h-auto mt-6">
        <div className="flex flex-col justify-start items-start w-full gap-x-1 bg-gray-200 rounded-md p-4">
          <p className="text-[14px] font-semibold mb-4">تصویر آگهی تأسیس</p>
          <img
            className="w-full h-full"
            src={
              formValues.foundation?.length > 0
                ? URL.createObjectURL(formValues.foundation[0])
                : null
            }
          />
        </div>
        <div className="flex flex-col justify-start items-start w-full gap-x-1 bg-gray-200 rounded-md p-4">
          <p className="text-[14px] font-semibold mb-4">
            تصویر آخرین روزنامه رسمی (حداکثر یک سال گذشته)
          </p>
          <img
            className="w-full h-full"
            src={
              formValues.newspaper?.length > 0
                ? URL.createObjectURL(formValues.newspaper[0])
                : null
            }
          />
        </div>
        <div className="flex flex-col justify-start items-start w-full gap-x-1 bg-gray-200 rounded-md p-4">
          <p className="text-[14px] font-semibold mb-4">
            تصویر کارت ملی مدیرعامل{" "}
          </p>
          <img
            className="w-full h-full"
            src={
              formValues.nationalCard?.length > 0
                ? URL.createObjectURL(formValues.nationalCard[0])
                : null
            }
          />
        </div>
        <div className="flex flex-col justify-start items-start w-full gap-x-1 bg-gray-200 rounded-md p-4">
          <p className="text-[14px] font-semibold mb-4">
            معرفی نماینده با سربرگ شرکت{" "}
          </p>
          <img
            className="w-full h-full"
            src={
              formValues.agent?.length > 0
                ? URL.createObjectURL(formValues.agent[0])
                : null
            }
          />
        </div>
        {jobType.map((item) => (
          <>
            {item.firstDoc && (
              <div className="flex flex-col justify-start items-start w-full gap-x-1 bg-gray-200 rounded-md p-4">
                <p className="text-[14px] font-semibold mb-4">تصویر مدرک 1 </p>
                <img
                  className="w-full h-full"
                  src={
                    item.firstDoc?.length > 0
                      ? URL.createObjectURL(item.firstDoc[0])
                      : null
                  }
                />
              </div>
            )}
            {item.secondDoc && (
              <div className="flex flex-col justify-start items-start w-full gap-x-1 bg-gray-200 rounded-md p-4">
                <p className="text-[14px] font-semibold mb-4">تصویر مدرک 2 </p>
                <img
                  className="w-full h-full"
                  src={
                    item.secondDoc?.length > 0
                      ? URL.createObjectURL(item.secondDoc[0])
                      : null
                  }
                />
              </div>
            )}
          </>
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
