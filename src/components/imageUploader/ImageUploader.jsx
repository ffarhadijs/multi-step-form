import { Box, Modal } from "@mui/material";
import React, { useState } from "react";
import { forwardRef } from "react";
import { FaTrashAlt } from "react-icons/fa";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

const ImageUploader = forwardRef(
  (
    {
      formValues,
      setFormValues,
      label,
      name,
      value,
      tabValue,
      touch,
      setTouch,
      error,
      jobType,
      setJobType,
      size,
      setSize,
    },
    ref
  ) => {
    const [open, setOpen] = useState(false);
    const [modalFile, setModalFile] = useState(null);
    const modalHandler = (file) => {
      setOpen(true);
      setModalFile(file);
    };
    const handleClose = () => {
      setOpen(false);
      setModalFile(null);
    };
    const imgRemoveHandler = (e) => {
      if (name === "firstDoc" || name === "secondDoc") {
        const jobTypeId = jobType.findIndex((job) => job.id === tabValue);
        const job = { ...jobType[jobTypeId] };
        job[e.target.name] = null;
        const updatedJobs = [...jobType];
        updatedJobs[jobTypeId] = job;
        setJobType(updatedJobs);
        ref.current.value = null;
      } else {
        setFormValues({ ...formValues, [formValues[name]]: null });
        ref.current.value = null;
      }
    };
    const focusHandler = (e) => {
      if (name === "firstDoc" || name === "secondDoc") {
        const jobTypeId = touch.findIndex((job) => job.id === tabValue);
        const job = { ...touch[jobTypeId] };
        job[e.target.name] = true;
        const updatedJobs = [...touch];
        updatedJobs[jobTypeId] = job;
        setTouch(updatedJobs);
      } else {
        setTouch({ ...touch, [name]: true });
      }
    };

    const changeHandler = (e) => {
      if (name === "firstDoc" || name === "secondDoc") {
        const jobTypeId = jobType.findIndex((job) => job.id === tabValue);
        const job = { ...jobType[jobTypeId] };
        job[e.target.name] = e.target.files;

        const updatedJobs = [...jobType];
        updatedJobs[jobTypeId] = job;
        setJobType(updatedJobs);
      } else {
        setFormValues({
          ...formValues,
          [name]: e.target.files,
        });
        setSize({ ...size, [name]: e.target.files[0]?.size });
      }
    };
    return (
      <div className="flex flex-col items-start justify-start gap-y-4 w-full border rounded-md border-gray-400 p-2">
        <label htmlFor={name} className="pointer-events-none text-[15px]">
          {label}
        </label>
        <div className="flex flex-row items-center justify-between w-full">
          <input
            ref={ref}
            id={name}
            name={name}
            className="text-sm"
            accept="image/png, image/jpg, image/jpeg"
            onChange={changeHandler}
            onFocus={focusHandler}
            type={"file"}
          />
          <button
            className="pl-8 text-red-500 text-xl outline-none"
            onClick={imgRemoveHandler}
          >
            <FaTrashAlt />
          </button>
        </div>
        <img
          onClick={() =>
            value?.length > 0 && modalHandler(URL.createObjectURL(value[0]))
          }
          className="w-full h-auto max-w-[400px] max-h-64 mx-auto"
          src={value?.length > 0 ? URL.createObjectURL(value[0]) : null}
        />
        {touch[name] && error[name] && (
          <span className="block text-red-600 text-xs font-bold pt-2">
            {error[name]}
          </span>
        )}
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
);

export default ImageUploader;
