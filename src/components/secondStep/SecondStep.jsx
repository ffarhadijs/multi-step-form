import { useEffect, createRef } from "react";
import validation from "./validation";
import Button from "../button/Button";
import ImageUploader from "../imageUploader/ImageUploader";

export default function SecondStep({
  size,
  setSize,
  touch,
  setTouch,
  error,
  setError,
  setActiveStep,
  formValues,
  setFormValues,
  handleBack,
}) {
  const foundationRef = createRef();
  const newspaperRef = createRef();
  const nationalCardRef = createRef();
  const agentRef = createRef();

  useEffect(() => {
    setError(validation(formValues, size));
  }, [formValues]);
  const secondStepNext = () => {
    setTouch({
      foundation: true,
      newspaper: true,
      nationalCard: true,
      agent: true,
    });
    if (!Object.keys(error).length) {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const imageUploaderList = [
    {
      id: 1,
      label: "تصویر آگهی تأسیس",
      name: "foundation",
      ref: foundationRef,
      value: formValues.foundation,
    },
    {
      id: 2,
      label: "تصویر آخرین روزنامه رسمی (حداکثر یک سال گذشته)",
      name: "newspaper",
      ref: newspaperRef,
      value: formValues.newspaper,
    },
    {
      id: 3,
      label: "تصویر کارت ملی مدیرعامل",
      name: "nationalCard",
      ref: nationalCardRef,
      value: formValues.nationalCard,
    },
    {
      id: 4,
      label: "معرفی نماینده با سربرگ شرکت ",
      name: "agent",
      ref: agentRef,
      value: formValues.agent,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full py-20">
      {imageUploaderList.map((item) => (
        <ImageUploader
          key={item.id}
          formValues={formValues}
          setFormValues={setFormValues}
          touch={touch}
          error={error}
          {...item}
          setTouch={setTouch}
          size={size}
          setSize={setSize}
        />
      ))}
      <div className="flex flex-row justify-center py-12 md:justify-start items-center">
        <Button onClick={secondStepNext} label="مرحله بعدی" />
        <Button onClick={handleBack} label="مرحله قبلی" />
      </div>
    </div>
  );
}
