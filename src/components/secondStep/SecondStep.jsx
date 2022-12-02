import { useState, useEffect, useRef } from "react";
import validation from "./validation";
import { FaTrashAlt } from "react-icons/fa";
import Button from "@mui/material/Button";
import { Modal } from "@mui/material";
import { Box } from "@mui/system";

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
  const foundationRef = useRef();
  const newspaperRef = useRef();
  const nationalCardRef = useRef();
  const agentRef = useRef();

  const changeHandler = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.files,
    });
    setSize({ ...size, [e.target.name]: e.target.files[0].size });
  };
  const focusHandler = (e) => {
    setTouch({ ...touch, [e.target.name]: true });
  };

  const removeFoundationHandler = () => {
    setFormValues({ ...formValues, foundation: null });
    foundationRef.current.value = null;
  };
  const removeNewspaperHandler = () => {
    setFormValues({ ...formValues, newspaper: null });
    newspaperRef.current.value = null;
  };
  const removeNationalCardHandler = () => {
    setFormValues({ ...formValues, nationalCard: null });
    nationalCardRef.current.value = null;
  };
  const removeAgentHandler = () => {
    setFormValues({ ...formValues, agent: null });
    agentRef.current.value = null;
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
    if (!Object.keys(error).length) {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };
  const modalHandler = (file) => {
    setOpen(true);
    setModalFile(file);
  };
  const handleClose = () => {
    setOpen(false);
    setModalFile(null);
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full py-20">
      <div className="flex flex-col items-start justify-start gap-y-4 w-full border rounded-md border-gray-400 p-2">
        <label htmlFor="foundation" className="pointer-events-none text-[15px]">تصویر آگهی تاسیس</label>
        <div className="flex flex-row items-center justify-between w-full">
          <input
            ref={foundationRef}
            id="foundation"
            name="foundation"
            className="text-sm"
            accept="image/png, image/jpg, image/jpeg"
            onChange={changeHandler}
            onFocus={focusHandler}
            type={"file"}
          />
          <button
            className="pl-8 text-red-500 text-xl outline-none"
            onClick={removeFoundationHandler}
          >
            <FaTrashAlt />
          </button>
        </div>
        <img
          onClick={() =>
            formValues.foundation?.length > 0 &&
            modalHandler(URL.createObjectURL(formValues.foundation[0]))
          }
          className="w-full h-auto max-w-[400px] max-h-64 mx-auto"
          src={
            formValues.foundation?.length > 0
              ? URL.createObjectURL(formValues.foundation[0])
              : null
          }
        />
        {touch.foundation && error.foundation && (
          <span className="block text-red-600 text-xs font-bold pt-2">
            {error.foundation}
          </span>
        )}
      </div>
      <div className="flex flex-col items-start justify-start gap-y-4 w-full border rounded-md border-gray-400 p-2">
        <label htmlFor="newspaper" className="pointer-events-none text-[15px]">
          {" "}
          تصویر آخرین روزنامه رسمی (حداکثر یک سال گذشته)
        </label>
        <div className="flex flex-row items-center justify-between w-full">
          <input
            ref={newspaperRef}
            id="newspaper"
            name="newspaper"
            accept="image/png, image/jpg, image/jpeg"
            onChange={changeHandler}
            onFocus={focusHandler}
            type={"file"}
            className="text-sm"
          />
          <button
            className="pl-8 text-red-500 text-xl outline-none"
            onClick={removeNewspaperHandler}
          >
            <FaTrashAlt />
          </button>
        </div>
        <img
          onClick={() =>
            formValues.newspaper?.length > 0 &&
            modalHandler(URL.createObjectURL(formValues.newspaper[0]))
          }
          className="w-full h-auto max-w-[400px] max-h-64 mx-auto"
          src={
            formValues.newspaper?.length > 0
              ? URL.createObjectURL(formValues.newspaper[0])
              : null
          }
        />
        {touch.newspaper && error.newspaper && (
          <span className="block text-red-600 text-xs font-bold pt-2">
            {error.newspaper}
          </span>
        )}
      </div>
      <div className="flex flex-col items-start justify-start gap-y-4 w-full border rounded-md border-gray-400 p-2">
        <label htmlFor="nationalCard" className="pointer-events-none text-[15px]">تصویر کارت ملی مدیرعامل</label>
        <div className="flex flex-row items-center justify-between w-full">
          <input
            ref={nationalCardRef}
            id="nationalCard"
            name="nationalCard"
            accept="image/png, image/jpg, image/jpeg"
            onChange={changeHandler}
            onFocus={focusHandler}
            type={"file"}
            className="text-sm"
          />
          <button
            className="pl-8 text-red-500 text-xl outline-none"
            onClick={removeNationalCardHandler}
          >
            <FaTrashAlt />
          </button>
        </div>
        <img
          onClick={() =>
            formValues.nationalCard?.length > 0 &&
            modalHandler(URL.createObjectURL(formValues.nationalCard[0]))
          }
          className="w-full h-auto max-w-[400px] max-h-64 mx-auto"
          src={
            formValues.nationalCard?.length > 0
              ? URL.createObjectURL(formValues.nationalCard[0])
              : null
          }
        />
        {touch.nationalCard && error.nationalCard && (
          <span className="block text-red-600 text-xs font-bold pt-2">
            {error.nationalCard}
          </span>
        )}
      </div>
      <div className="flex flex-col items-start justify-start gap-y-4 w-full border rounded-md border-gray-400 p-2">
        <label htmlFor="agent" className="pointer-events-none text-[15px]">معرفی نماینده با سربرگ شرکت </label>
        <div className="flex flex-row items-center justify-between w-full">
          <input
            ref={agentRef}
            id="agent"
            name="agent"
            accept="image/png, image/jpg, image/jpeg"
            onChange={changeHandler}
            onFocus={focusHandler}
            type={"file"}
            className="text-sm"
          />
          <button
            className="pl-8 text-red-500 text-xl outline-none"
            onClick={removeAgentHandler}
          >
            <FaTrashAlt />
          </button>
        </div>
        <img
          onClick={() =>
            formValues.agent?.length > 0 &&
            modalHandler(URL.createObjectURL(formValues.agent[0]))
          }
          className="w-full h-auto max-w-[400px] max-h-64 mx-auto"
          src={
            formValues.agent?.length > 0
              ? URL.createObjectURL(formValues.agent[0])
              : null
          }
        />
        {touch.agent && error.agent && (
          <span className="block text-red-600 text-xs font-bold pt-2">
            {error.agent}
          </span>
        )}
      </div>
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
