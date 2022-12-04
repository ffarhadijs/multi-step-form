import { useState, useEffect, createRef } from "react";
import validation from "./validation";
import Button from "@mui/material/Button";
import { Modal } from "@mui/material";
import { Box } from "@mui/system";
import ImageUploader from "../imageUploader/ImageUploader";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

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
  const [open, setOpen] = useState(false);
  const [modalFile, setModalFile] = useState(null);
  const foundationRef = createRef();
  const newspaperRef = createRef();
  const nationalCardRef = createRef();
  const agentRef = createRef();

  const changeHandler = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.files,
    });
    setSize({ ...size, [e.target.name]: e.target.files[0]?.size });
  };
  const focusHandler = (e) => {
    setTouch({ ...touch, [e.target.name]: true });
  };

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
    // if (!Object.keys(error).length) {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    // }
  };

  const handleClose = () => {
    setOpen(false);
    setModalFile(null);
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
          setOpen={setOpen}
          setModalFile={setModalFile}
          formValues={formValues}
          setFormValues={setFormValues}
          touch={touch}
          error={error}
          {...item}
          changeHandler={changeHandler}
          focusHandler={focusHandler}
        />
      ))}
      <div className="flex flex-row justify-center py-12 md:justify-start items-center">
        <Button
          variant={"contained"}
          sx={{ mr: 2, fontFamily: "vazir" }}
          onClick={secondStepNext}
        >
          مرحله بعدی
        </Button>
        <Button
          variant={"contained"}
          sx={{ ml: 2, fontFamily: "vazir" }}
          onClick={handleBack}
        >
          مرحله قبلی
        </Button>
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
}
