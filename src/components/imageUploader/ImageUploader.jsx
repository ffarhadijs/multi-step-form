import React, { useEffect } from "react";
import { forwardRef } from "react";
import { FaTrashAlt } from "react-icons/fa";

const ImageUploader = forwardRef(
  (
    {
      formValues,
      setFormValues,
      label,
      name,
      value,
      touch,
      error,
      changeHandler,
      focusHandler,
      setOpen,
      setModalFile,
    },
    ref
  ) => {
    const modalHandler = (file) => {
      setOpen(true);
      setModalFile(file);
    };
    const imgRemoveHandler = () => {
      setFormValues({ ...formValues, [formValues[name]]: null });
      ref.current.value = null;
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
      </div>
    );
  }
);

export default ImageUploader;
